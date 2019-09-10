import { getDbConnection } from '../util/database/getDbConnection'
import { isWarmUp } from '../util/isWarmup'
import { getJwtToken } from '../util/getJwtToken'
import { getVerifiedJwtToken } from '../util/getVerifiedJwtToken'
import { obfuscateId } from '../util/obfuscation/obfuscateId'

let dbConnection = null

const getProjects = async (event) => {
  // Prevent execution if the event source is the warmer
  if (await isWarmUp(event)) return false

  const jwtToken = getJwtToken(event)
  const { username } = getVerifiedJwtToken(jwtToken)

  // Retrive a connection to the database
  dbConnection = await getDbConnection(dbConnection)

  try {
    const projectRecords = await dbConnection('projects')
      .select(
        'projects.id',
        'projects.name',
        'projects.path',
        'projects.created_at'
      )
      .join('users', { 'projects.user_id': 'users.id' })
      .orderBy('projects.created_at', 'DESC')
      .where({
        'users.urs_id': username
      })


    // Return the name and path
    return {
      isBase64Encoded: false,
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify([
        ...projectRecords.map((project) => {
          const { id } = project

          return {
            ...project,
            id: obfuscateId(id)
          }
        })
      ])
    }
  } catch (error) {
    console.log(error)

    return {
      isBase64Encoded: false,
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ errors: [error] })
    }
  }
}

export default getProjects
