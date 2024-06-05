export default {
  headers: {
    'cmr-hits': '7648',
    'cmr-request-id': '5614bc1d-66fd-4bce-9ca2-504d5931ff25',
    'cmr-took': '130',
    'jwt-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0ZXN0dXNlciIsImlhdCI6MTU3ODQzMzQ3Nn0.kBbFOITDok0BDLfeB6RxBHHwkuyt7CRMHLThBmZFE5c'
  },
  body: {
    feed: {
      updated: '2020-01-07T21:44:39.829Z',
      id: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?has_granules_or_cwic=true&include_facets=v2&include_granule_counts=true&include_has_granules=true&include_tags=edsc.extra.%2A%2Corg.ceos.wgiss.cwic.granules.prod&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&page_num=1&page_size=20&sort_key%5B%5D=has_granules_or_cwic',
      title: 'ECHO dataset metadata',
      entry: [
        {
          tags: {
            'org.ceos.wgiss.cwic.granules.prod': {}
          },
          boxes: [
            '-90 -180 90 180'
          ],
          time_start: '2018-11-07T00:00:00.000Z',
          version_id: '2.61',
          updated: '2019-08-07T00:00:00.000Z',
          dataset_id: 'GHRSST Level 2P OSPO dataset v2.61 from VIIRS on the NOAA-20 satellite (GDS v2) (GDS version 2)',
          has_spatial_subsetting: false,
          has_transforms: false,
          has_variables: false,
          data_center: 'NOAA_NCEI',
          short_name: '10.25921/sfs7-9688',
          organizations: [
            'DOC/NOAA/NESDIS/NCEI'
          ],
          title: 'GHRSST Level 2P OSPO dataset v2.61 from VIIRS on the NOAA-20 satellite (GDS v2) (GDS version 2)',
          coordinate_system: 'CARTESIAN',
          summary: 'NOAA-20 (N20/JPSS-1/J1) is the second satellite in the US NOAA latest generation Joint Polar Satellite System (JPSS). N20 was launched on November 18, 2017. In conjunction with the first US satellite in JPSS series, Suomi National Polar-orbiting Partnership (S-NPP) satellite launched on October 28, 2011, N20 form the new NOAA polar constellation. NOAA is responsible for all JPSS products, including SST from the Visible Infrared Imaging Radiometer Suite (VIIRS). VIIRS is a whiskbroom scanning radiometer, which takes measurements in the cross-track direction within a field of view of 112.56-deg using 16 detectors and a double-sided mirror assembly. At a nominal altitude of 829 km, the swath width is 3,060 km, providing global daily coverage for both day and night passes. VIIRS has 22 spectral bands, covering the spectrum from 0.4-12 um, including 16 moderate resolution bands (M-bands). \n\nThe L2P SST product is derived at the native sensor resolution (~0.75 km at nadir, ~1.5 km at swath edge) using NOAA\'s Advanced Clear-Sky Processor for Ocean (ACSPO) system, and reported in 10 minute granules in netCDF4 format, compliant with the GHRSST Data Specification version 2 (GDS2). There are 144 granules per 24hr interval, with a total data volume of 27GB/day. In addition to pixel-level earth locations, Sun-sensor geometry, and ancillary data from the NCEP global weather forecast, ACSPO outputs include four brightness temperatures (BTs) in M12 (3.7um), M14 (8.6um), M15 (11um), and M16 (12um) bands, and two reflectances in M5 (0.67um) and M7 (0.87um) bands. The reflectances are used for cloud identification. Beginning with ACSPO v2.60, all BTs and reflectances are destriped (Bouali and Ignatov, 2014) and resampled (Gladkova et al., 2016), to minimize the effect of bow-tie distortions and deletions. SSTs are retrieved from destriped BTs. \n\nSSTs are derived from BTs using the Multi-Channel SST (MCSST; night) and Non-Linear SST (NLSST; day) algorithms (Petrenko et al., 2014). ACSPO clear-sky mask (ACSM) is provided in each pixel as part of variable l2p_flags, which also includes day/night, land, ice, twilight, and glint flags (Petrenko et al., 2010). Fill values are reported in all pixels with >5 km inland. For each valid water pixel (defined as ocean, sea, lake or river, and up to 5 km inland), four BTs in M12/14/15/16 (included for those users interested in direct \'radiance assimilation\', e.g., NOAA NCEP, NASA GMAO, ECMWF) and two refelctances in M5/7 are reported, along with derived SST. Other variables include NCEP wind speed and ACSPO SST minus reference SST (Canadian Met Centre 0.1deg L4 SST; available at https://podaac.jpl.nasa.gov/dataset/CMC0.1deg-CMC-L4-GLOB-v3.0).  Only ACSM confidently clear pixels are recommended (equivalent to GDS2 quality level=5). Per GDS2 specifications, two additional Sensor-Specific Error Statistics layers (SSES bias and standard deviation) are reported in each pixel with QL=5. Note that users of ACSPO data have the flexibility to ignore the ACSM and derive their own clear-sky mask, and apply it to BTs and SSTs. They may also ignore ACSPO SSTs, and derive their own SSTs from the original BTs. \n\nThe L2P product is monitored and validated against quality controlled in situ data provided by NOAA in situ SST Quality Monitor system (iQuam; Xu and Ignatov, 2014), using another NOAA system, SST Quality Monitor (SQUAM; Dash et al, 2010). Corresponding clear-sky BTs are validated against RTM simulation in the Monitoring IR Clear-sky Radiances over Ocean for SST system (MICROS; Liang and Ignatov, 2011). A reduced size (1GB/day), equal-angle gridded (0.02-deg), ACSPO L3U product is also available at https://podaac.jpl.nasa.gov/dataset/VIIRS_N20-OSPO-L3U-v2.61, where gridded L2P SSTs with QL=5 only are reported, and BT layers omitted.',
          has_granules: false,
          orbit_parameters: {},
          id: 'C1597928934-NOAA_NCEI',
          has_formats: false,
          original_format: 'ISO19115',
          granule_count: 0,
          archive_center: 'DOC/NOAA/NESDIS/NCEI',
          has_temporal_subsetting: false,
          browse_flag: true,
          online_access_flag: true,
          links: [
            {
              length: '0.0KB',
              rel: 'http://esipfed.org/ns/fedsearch/1.1/data#',
              hreflang: 'en-US',
              href: 'https://doi.org/10.25921/sfs7-9688'
            },
            {
              length: '0.0KB',
              rel: 'http://esipfed.org/ns/fedsearch/1.1/data#',
              hreflang: 'en-US',
              href: 'https://www.nodc.noaa.gov/search/granule/rest/find/document?searchText=fileIdentifier%3AGHRSST-VIIRS_N20-OSPO-L2P*%20OR%20fileIdentifier%3AVIIRS_N20-OSPO-L2P*%20OR%20fileIdentifier%3AGHRSST-VIIRS_N20-OSPO-L2P*%20OR%20fileIdentifier%3AVIIRS_N20-OSPO-L2P*&start=1&max=100&f=searchPage'
            },
            {
              length: '0.0KB',
              rel: 'http://esipfed.org/ns/fedsearch/1.1/data#',
              hreflang: 'en-US',
              href: 'https://data.nodc.noaa.gov/thredds/catalog/ghrsst/L2P/VIIRS_N20/OSPO/'
            },
            {
              length: '0.0KB',
              rel: 'http://esipfed.org/ns/fedsearch/1.1/data#',
              hreflang: 'en-US',
              href: 'https://data.nodc.noaa.gov/ghrsst/L2P/VIIRS_N20/OSPO/'
            },
            {
              length: '0.0KB',
              rel: 'http://esipfed.org/ns/fedsearch/1.1/data#',
              hreflang: 'en-US',
              href: 'ftp://ftp.nodc.noaa.gov/pub/data.nodc/ghrsst/L2P/VIIRS_N20/OSPO/'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/browse#',
              hreflang: 'en-US',
              href: 'https://data.nodc.noaa.gov/cgi-bin/gfx?id=gov.noaa.nodc:GHRSST-VIIRS_N20-OSPO-L2P'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'ftp://ftp.star.nesdis.noaa.gov/pub/sod/osb/aignatov/ACSPO/'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'https://ghrsst.jpl.nasa.gov'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'https://journals.ametsoc.org/doi/abs/10.1175/2010JTECHA1413.1'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'https://onlinelibrary.wiley.com/doi/10.1002/2013JD020637/abstract'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'https://podaac-tools.jpl.nasa.gov/drive/files/OceanTemperature/ghrsst/docs/GDS20r5.pdf'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'https://podaac.jpl.nasa.gov/ws/search/granule/?datasetId=PODAAC-GHV20-2PO61'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'https://www.star.nesdis.noaa.gov/sod/sst/iquam/'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'https://www.star.nesdis.noaa.gov/sod/sst/micros/'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'https://www.star.nesdis.noaa.gov/sod/sst/squam/'
            }
          ]
        },
        {
          tags: {
            'org.ceos.wgiss.cwic.granules.prod': {}
          },
          boxes: [
            '-73 -81 73 81'
          ],
          time_start: '2013-08-01T00:00:00.000Z',
          version_id: '1.0',
          updated: '2019-01-03T00:00:00.000Z',
          dataset_id: 'GHRSST Level 2P Atlantic Regional Skin Sea Surface Temperature from the Spinning Enhanced Visible and InfraRed Imager (SEVIRI) on the Meteosat Second Generation (MSG-3) satellite (GDS version 2)',
          has_spatial_subsetting: false,
          has_transforms: false,
          has_variables: false,
          data_center: 'NOAA_NCEI',
          short_name: '10.7289/v5j67dz9',
          organizations: [
            'DOC/NOAA/NESDIS/NCEI'
          ],
          title: 'GHRSST Level 2P Atlantic Regional Skin Sea Surface Temperature from the Spinning Enhanced Visible and InfraRed Imager (SEVIRI) on the Meteosat Second Generation (MSG-3) satellite (GDS version 2)',
          coordinate_system: 'CARTESIAN',
          summary: 'The Meteosat Second Generation (MSG-3) satellites  are spin stabilized geostationary satellites operated by the European Organization for the Exploitation of Meteorological Satellites (EUMETSAT) to provide accurate weather monitoring data through its primary instrument the Spinning Enhanced Visible and InfraRed Imager (SEVIRI), which has the capacity to observe the Earth in 12 spectral channels. Eight of these channels are in the thermal infrared, providing among other information, observations of the temperatures of clouds, land and sea surfaces at approximately 5 km resolution with a 15 minute duty cycle. This Group for High Resolution Sea Surface Temperature (GHRSST) dataset produced by the US National Oceanic and Atmospheric Administration (NOAA)  National Environmental Satellite, Data, and Information Service (NESDIS) is derived from the SEVIRI instrument on the second MSG satellite (also known as  Meteosat-9) that was launched on 22 December 2005. Skin sea surface temperature (SST) data are calculated from the infrared channels of SEVIRI at full resolution every 15 minutes. L2P data products with Single Sensor Error Statistics (SSES) are then derived following the GHRSST-PP Data Processing Specification (GDS) version 2.0.',
          has_granules: false,
          time_end: '2018-02-20T00:00:00.000Z',
          orbit_parameters: {},
          id: 'C1597928333-NOAA_NCEI',
          has_formats: false,
          original_format: 'ISO19115',
          granule_count: 0,
          archive_center: 'DOC/NOAA/NESDIS/NCEI',
          has_temporal_subsetting: false,
          browse_flag: true,
          online_access_flag: true,
          links: [
            {
              length: '0.0KB',
              rel: 'http://esipfed.org/ns/fedsearch/1.1/data#',
              hreflang: 'en-US',
              href: 'https://doi.org/10.7289/v5j67dz9'
            },
            {
              length: '0.0KB',
              rel: 'http://esipfed.org/ns/fedsearch/1.1/data#',
              hreflang: 'en-US',
              href: 'https://www.nodc.noaa.gov/search/granule/rest/find/document?searchText=fileIdentifier%3AGHRSST-MSG03-OSPO-L2P*%20OR%20fileIdentifier%3AMSG03-OSPO-L2P*&start=1&max=100&f=searchPage'
            },
            {
              length: '0.0KB',
              rel: 'http://esipfed.org/ns/fedsearch/1.1/data#',
              hreflang: 'en-US',
              href: 'https://data.nodc.noaa.gov/thredds/catalog/ghrsst/L2P/MSG03/OSPO/'
            },
            {
              length: '0.0KB',
              rel: 'http://esipfed.org/ns/fedsearch/1.1/data#',
              hreflang: 'en-US',
              href: 'https://data.nodc.noaa.gov/ghrsst/L2P/MSG03/OSPO/'
            },
            {
              length: '0.0KB',
              rel: 'http://esipfed.org/ns/fedsearch/1.1/data#',
              hreflang: 'en-US',
              href: 'ftp://ftp.nodc.noaa.gov/pub/data.nodc/ghrsst/L2P/MSG03/OSPO/'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/browse#',
              hreflang: 'en-US',
              href: 'https://data.nodc.noaa.gov/cgi-bin/gfx?id=gov.noaa.nodc:GHRSST-MSG03-OSPO-L2P'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'https://accession.nodc.noaa.gov/0123222/data/0-data/miscellaneous-documents/GHRSSTUserGuidev91.pdf'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'https://accession.nodc.noaa.gov/0123222/data/0-data/governance-documents/GDS20r5.pdf'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'https://www.nodc.noaa.gov/SatelliteData/ghrsst/logs/'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'https://dx.doi.org/10.1016/j.rse.2012.12.019'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'http://gsics.tools.eumetsat.int/plotter/'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'http://www.eumetsat.int/'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'http://ghrsst.jpl.nasa.gov'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'http://www.ghrsst.org'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'https://podaac-tools.jpl.nasa.gov/drive/files/OceanTemperature/ghrsst/docs/GDS20r5.pdf'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'https://podaac-tools.jpl.nasa.gov/drive/files/OceanTemperature/ghrsst/sw/IDL/'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'https://podaac.jpl.nasa.gov/ws/search/granule/?datasetId=PODAAC-GHMG3-2PO02'
            }
          ]
        },
        {
          tags: {
            'org.ceos.wgiss.cwic.granules.prod': {}
          },
          boxes: [
            '-90 -180 90 180'
          ],
          time_start: '2015-05-19T00:00:00.000Z',
          version_id: '2.61',
          updated: '2019-08-11T00:00:00.000Z',
          dataset_id: 'GHRSST Level 3U OSPO dataset v2.61 from VIIRS on S-NPP Satellite (GDS v2) (GDS version 2)',
          has_spatial_subsetting: false,
          has_transforms: false,
          has_variables: false,
          data_center: 'NOAA_NCEI',
          short_name: '10.7289/v5kk98s8',
          organizations: [
            'DOC/NOAA/NESDIS/NCEI'
          ],
          title: 'GHRSST Level 3U OSPO dataset v2.61 from VIIRS on S-NPP Satellite (GDS v2) (GDS version 2)',
          coordinate_system: 'CARTESIAN',
          summary: 'The Joint Polar Satellite System (JPSS), starting with S-NPP launched on 28 October 2011, is the new generation of the US Polar Operational Environmental Satellites (POES). The Suomi National Polar-orbiting Partnership (S-NPP) is a collaboration between NASA and NOAA. \n\nThe ACSPO SNPP/VIIRS L3U (Level 3 Uncollated) product is a gridded version of the ACSPO SNPP/VIIRS L2P product available here https://podaac.jpl.nasa.gov/dataset/VIIRS_NPP-OSPO-L2P-v2.61. The L3U output files are 10-minute granules in netCDF4 format, compliant with the GHRSST Data Specification version 2 (GDS2). There are 144 granules per 24hr interval, with a total data volume of 500MB/day. Fill values are reported at all invalid pixels, including pixels with >5 km inland.  For each valid water pixel (defined as ocean, sea, lake or river, and up to 5 km inland), the following layers are reported: SSTs, ACSPO clear-sky mask (ACSM; provided in each grid as part of l2p_flags, which also includes day/night, land, ice, twilight, and glint flags), NCEP wind speed, and ACSPO SST minus reference (Canadian Met Centre 0.1deg L4 SST; available at https://podaac.jpl.nasa.gov/dataset/CMC0.1deg-CMC-L4-GLOB-v3.0 ). Only L2P SSTs with QL=5 were gridded, so all valid SSTs are recommended for the users. Per GDS2 specifications, two additional Sensor-Specific Error Statistics layers (SSES bias and standard deviation) are reported in each pixel with valid SST. The ACSPO VIIRS L3U product is monitored and validated against iQuam in situ data (Xu and Ignatov, 2014) in SQUAM (Dash et al, 2010).',
          has_granules: false,
          orbit_parameters: {},
          id: 'C1597990368-NOAA_NCEI',
          has_formats: false,
          original_format: 'ISO19115',
          granule_count: 0,
          archive_center: 'DOC/NOAA/NESDIS/NCEI',
          has_temporal_subsetting: false,
          browse_flag: true,
          online_access_flag: true,
          links: [
            {
              length: '0.0KB',
              rel: 'http://esipfed.org/ns/fedsearch/1.1/data#',
              hreflang: 'en-US',
              href: 'https://doi.org/10.7289/v5kk98s8'
            },
            {
              length: '0.0KB',
              rel: 'http://esipfed.org/ns/fedsearch/1.1/data#',
              hreflang: 'en-US',
              href: 'https://www.nodc.noaa.gov/search/granule/rest/find/document?searchText=fileIdentifier%3AGHRSST-VIIRS_NPP-OSPO-L3U*%20OR%20fileIdentifier%3AVIIRS_NPP-OSPO-L3U*%20OR%20fileIdentifier%3AGHRSST-VIIRS_NPP-OSPO-L3U*%20OR%20fileIdentifier%3AVIIRS_NPP-OSPO-L3U*%20OR%20fileIdentifier%3AGHRSST-VIIRS_NPP-OSPO-L3U*%20OR%20fileIdentifier%3AVIIRS_NPP-OSPO-L3U*%20OR%20fileIdentifier%3AGHRSST-VIIRS_NPP-OSPO-L3U*%20OR%20fileIdentifier%3AVIIRS_NPP-OSPO-L3U*&start=1&max=100&f=searchPage'
            },
            {
              length: '0.0KB',
              rel: 'http://esipfed.org/ns/fedsearch/1.1/data#',
              hreflang: 'en-US',
              href: 'https://data.nodc.noaa.gov/thredds/catalog/ghrsst/L3U/VIIRS_NPP/OSPO/'
            },
            {
              length: '0.0KB',
              rel: 'http://esipfed.org/ns/fedsearch/1.1/data#',
              hreflang: 'en-US',
              href: 'https://data.nodc.noaa.gov/ghrsst/L3U/VIIRS_NPP/OSPO/'
            },
            {
              length: '0.0KB',
              rel: 'http://esipfed.org/ns/fedsearch/1.1/data#',
              hreflang: 'en-US',
              href: 'ftp://ftp.nodc.noaa.gov/pub/data.nodc/ghrsst/L3U/VIIRS_NPP/OSPO/'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/browse#',
              hreflang: 'en-US',
              href: 'https://data.nodc.noaa.gov/cgi-bin/gfx?id=gov.noaa.nodc:GHRSST-VIIRS_NPP-OSPO-L3U'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'https://accession.nodc.noaa.gov/0123222/data/0-data/miscellaneous-documents/GHRSSTUserGuidev91.pdf'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'https://accession.nodc.noaa.gov/0123222/data/0-data/governance-documents/GDS20r5.pdf'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'https://www.nodc.noaa.gov/SatelliteData/ghrsst/logs/'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'ftp://ftp.star.nesdis.noaa.gov/pub/sod/osb/aignatov/ACSPO/'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'https://www.star.nesdis.noaa.gov/'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'http://www.ospo.noaa.gov/Organization/About/contact.html'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'https://dx.doi.org/10.1016/j.rse.2015.01.003'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'https://www.star.nesdis.noaa.gov/'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'https://dx.doi.org/10.1002/2013JD020637'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'https://www.star.nesdis.noaa.gov/'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'https://www.star.nesdis.noaa.gov/sod/sst/squam/'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'ftp://ftp.star.nesdis.noaa.gov/pub/sod/osb/aignatov/ACSPO/'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'https://ghrsst.jpl.nasa.gov'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'https://journals.ametsoc.org/doi/abs/10.1175/2010JTECHA1413.1'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'https://onlinelibrary.wiley.com/doi/10.1002/2013JD020637/abstract'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'https://podaac-tools.jpl.nasa.gov/drive/files/OceanTemperature/ghrsst/docs/GDS20r5.pdf'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'https://podaac-tools.jpl.nasa.gov/drive/files/OceanTemperature/ghrsst/sw/IDL/'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'https://podaac.jpl.nasa.gov/ws/search/granule/?datasetId=PODAAC-GHVRS-3UO61'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'https://www.star.nesdis.noaa.gov/sod/sst/iquam/'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'https://www.star.nesdis.noaa.gov/sod/sst/micros/'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'https://www.star.nesdis.noaa.gov/sod/sst/squam/'
            }
          ]
        },
        {
          tags: {
            'org.ceos.wgiss.cwic.granules.prod': {}
          },
          boxes: [
            '-90 -180 90 180'
          ],
          time_start: '2014-05-19T00:00:00.000Z',
          version_id: '2.61',
          updated: '2019-08-06T00:00:00.000Z',
          dataset_id: 'GHRSST Level 2P OSPO dataset v2.61 from VIIRS on S-NPP Satellite (GDS v2) (GDS version 2)',
          has_spatial_subsetting: false,
          has_transforms: false,
          has_variables: false,
          data_center: 'NOAA_NCEI',
          short_name: '10.7289/v5pr7sx5',
          organizations: [
            'DOC/NOAA/NESDIS/NCEI'
          ],
          title: 'GHRSST Level 2P OSPO dataset v2.61 from VIIRS on S-NPP Satellite (GDS v2) (GDS version 2)',
          coordinate_system: 'CARTESIAN',
          summary: 'The Joint Polar Satellite System (JPSS), starting with S-NPP launched on 28 October 2011, is the new generation of the US Polar Operational Environmental Satellites (POES). The Suomi National Polar-orbiting Partnership (S-NPP) is a collaboration between NASA and NOAA. NOAA is responsible for all JPSS products, including SST from the Visible Infrared Imaging Radiometer Suite (VIIRS). VIIRS is a whiskbroom scanning radiometer, which takes measurements in the cross-track direction within a field of view of 112.56-deg using 16 detectors and a double-sided mirror assembly. At a nominal altitude of 829 km, the swath width is 3,060 km, providing global daily coverage for both day and night passes. VIIRS has 22 spectral bands covering the spectrum from 0.4-12 um, including 16 moderate resolution bands (M-bands). \n\nThe L2P SST product is derived at the native sensor resolution (~0.75 km at nadir, ~1.5 km at swath edge) using NOAA\'s Advanced Clear-Sky Processor for Ocean (ACSPO) system, and reported in 10-minute granules in netCDF4 format, compliant with the GHRSST Data Specification version 2 (GDS2). There are 144 granules per 24hr interval, with a total data volume of 27GB/day. In addition to pixel-level earth locations, Sun-sensor geometry, and ancillary data from the NCEP global weather forecast, ACSPO outputs include four brightness temperatures (BTs) in M12 (3.7um), M14 (8.6um), M15 (11um), and M16 (12um) bands, and two reflectances in M5 (0.67um) and M7 (0.87um) bands. The reflectances are used for cloud identification. Beginning with ACSPO v2.60, all BTs and reflectances are destriped (Bouali and Ignatov, 2014) and resampled (Gladkova et al., 2016), to minimize the effect of bow-tie distortions and deletions. SSTs are retrieved from destriped BTs.\n\nSSTs are derived from BTs using the Multi-Channel SST (MCSST; night) and Non-Linear SST (NLSST; day) algorithms (Petrenko et al., 2014). An ACSPO clear-sky mask (ACSM) is provided in each pixel as part of variable l2p_flags, which also includes day/night, land, ice, twilight, and glint flags (Petrenko et al., 2010).  Fill values are reported in all invalid pixels, including those with >5 km inland. For each valid water pixel (defined as ocean, sea, lake or river, and up to 5 km inland), four BTs in M12/14/15/16 (included for those users interested in direct \'radiance assimilation\', e.g., NOAA NCEP, NASA GMAO, ECMWF) and two refelctances in M5/7 are reported, along with derived SST. Other variables include NCEP wind speed and ACSPO SST minus reference SST (Canadian Met Centre 0.1deg L4 SST; available at https://podaac.jpl.nasa.gov/dataset/CMC0.1deg-CMC-L4-GLOB-v3.0).  Only ACSM confidently clear pixels are recommended (equivalent to GDS2 quality level=5). Per GDS2 specifications, two additional Sensor-Specific Error Statistics layers (SSES bias and standard deviation) are reported in each pixel with QL=5. Note that users of ACSPO data have the flexibility to ignore the ACSM and derive their own clear-sky mask, and apply it to BTs and SSTs. They may also ignore ACSPO SSTs, and derive their own SSTs from the original BTs.\n\nThe ACSPO VIIRS L2P product is monitored and validated against quality controlled in situ data provided by NOAA in situ SST Quality Monitor system (iQuam; Xu and Ignatov, 2014) using another NOAA system, SST Quality Monitor (SQUAM; Dash et al, 2010). Corresponding clear-sky BTs are validated against RTM simulations in the Monitoring IR Clear-sky Radiances over Ocean for SST system (MICROS; Liang and Ignatov, 2011). A reduced size (1GB/day), equal-angle gridded (0.02-deg resolution), ACSPO L3U product is also available at https://podaac.jpl.nasa.gov/dataset/VIIRS_NPP-OSPO-L3U-v2.61, where gridded L2P SSTs with QL=5 only are reported, and BT layers omitted.',
          has_granules: false,
          orbit_parameters: {},
          id: 'C1224519979-NOAA_NCEI',
          has_formats: false,
          original_format: 'ISO19115',
          granule_count: 0,
          archive_center: 'DOC/NOAA/NESDIS/NCEI',
          has_temporal_subsetting: false,
          browse_flag: true,
          online_access_flag: true,
          links: [
            {
              length: '0.0KB',
              rel: 'http://esipfed.org/ns/fedsearch/1.1/data#',
              hreflang: 'en-US',
              href: 'https://doi.org/10.7289/v5pr7sx5'
            },
            {
              length: '0.0KB',
              rel: 'http://esipfed.org/ns/fedsearch/1.1/data#',
              hreflang: 'en-US',
              href: 'https://www.nodc.noaa.gov/search/granule/rest/find/document?searchText=fileIdentifier%3AGHRSST-VIIRS_NPP-OSPO-L2P*%20OR%20fileIdentifier%3AVIIRS_NPP-OSPO-L2P*%20OR%20fileIdentifier%3AGHRSST-VIIRS_NPP-OSPO-L2P*%20OR%20fileIdentifier%3AVIIRS_NPP-OSPO-L2P*%20OR%20fileIdentifier%3AGHRSST-VIIRS_NPP-OSPO-L2P*%20OR%20fileIdentifier%3AVIIRS_NPP-OSPO-L2P*%20OR%20fileIdentifier%3AGHRSST-VIIRS_NPP-OSPO-L2P*%20OR%20fileIdentifier%3AVIIRS_NPP-OSPO-L2P*%20OR%20fileIdentifier%3AGHRSST-VIIRS_NPP-OSPO-L2P*%20OR%20fileIdentifier%3AVIIRS_NPP-OSPO-L2P*&start=1&max=100&f=searchPage'
            },
            {
              length: '0.0KB',
              rel: 'http://esipfed.org/ns/fedsearch/1.1/data#',
              hreflang: 'en-US',
              href: 'https://data.nodc.noaa.gov/thredds/catalog/ghrsst/L2P/VIIRS_NPP/OSPO/'
            },
            {
              length: '0.0KB',
              rel: 'http://esipfed.org/ns/fedsearch/1.1/data#',
              hreflang: 'en-US',
              href: 'https://data.nodc.noaa.gov/ghrsst/L2P/VIIRS_NPP/OSPO/'
            },
            {
              length: '0.0KB',
              rel: 'http://esipfed.org/ns/fedsearch/1.1/data#',
              hreflang: 'en-US',
              href: 'ftp://ftp.nodc.noaa.gov/pub/data.nodc/ghrsst/L2P/VIIRS_NPP/OSPO/'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/browse#',
              hreflang: 'en-US',
              href: 'https://data.nodc.noaa.gov/cgi-bin/gfx?id=gov.noaa.nodc:GHRSST-VIIRS_NPP-OSPO-L2P'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'https://accession.nodc.noaa.gov/0123222/data/0-data/miscellaneous-documents/GHRSSTUserGuidev91.pdf'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'https://accession.nodc.noaa.gov/0123222/data/0-data/governance-documents/GDS20r5.pdf'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'https://www.nodc.noaa.gov/SatelliteData/ghrsst/logs/'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'https://dx.doi.org/10.1002/2013JD020637'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'https://www.star.nesdis.noaa.gov/'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'https://www.star.nesdis.noaa.gov/sod/sst/squam/'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'ftp://ftp.star.nesdis.noaa.gov/pub/sod/osb/aignatov/ACSPO/'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'https://ghrsst.jpl.nasa.gov'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'https://journals.ametsoc.org/doi/abs/10.1175/2010JTECHA1413.1'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'https://onlinelibrary.wiley.com/doi/10.1002/2013JD020637/abstract'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'https://podaac-tools.jpl.nasa.gov/drive/files/OceanTemperature/ghrsst/docs/GDS20r5.pdf'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'https://podaac.jpl.nasa.gov/ws/search/granule/?datasetId=PODAAC-GHVRS-2PO61'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'https://www.star.nesdis.noaa.gov/sod/sst/iquam/'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'https://www.star.nesdis.noaa.gov/sod/sst/micros/'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'https://www.star.nesdis.noaa.gov/sod/sst/squam/'
            }
          ]
        },
        {
          processing_level_id: '3',
          tags: {
            'org.ceos.wgiss.cwic.granules.prod': {},
            'edsc.extra.serverless.collection_capabilities': {
              data: {
                cloud_cover: true,
                day_night_flag: true,
                granule_online_access_flag: true,
                orbit_calculated_spatial_domains: false
              }
            }
          },
          boxes: [
            '-90 -180 90 180'
          ],
          time_start: '1860-01-01T00:00:00.000Z',
          version_id: '1',
          updated: '2019-04-15T17:59:28.000Z',
          dataset_id: 'Global Maps of Atmospheric Nitrogen Deposition, 1860, 1993, and 2050',
          has_spatial_subsetting: true,
          has_transforms: true,
          associations: {
            services: [
              'S1569163021-ORNL_DAAC'
            ]
          },
          has_variables: true,
          data_center: 'ORNL_DAAC',
          short_name: '1860_1993_2050_NITROGEN_830',
          organizations: [
            'ORNL_DAAC'
          ],
          title: 'Global Maps of Atmospheric Nitrogen Deposition, 1860, 1993, and 2050',
          coordinate_system: 'CARTESIAN',
          summary: 'This data set provides global gridded estimates of atmospheric deposition of total inorganic nitrogen (N), NHx (NH3 and NH4+), and NOy (all oxidized forms of nitrogen other than N2O), in mg N/m2/year, for the years 1860 and 1993 and projections for the year 2050. The data set was generated using a global three-dimensional chemistry-transport model (TM3) with a spatial resolution of 5 degrees longitude by 3.75 degrees latitude (Jeuken et al., 2001; Lelieveld and Dentener, 2000). Nitrogen emissions estimates (Van Aardenne et al., 2001) and projection scenario data (IPCC, 1996; 2000) were used as input to the model.',
          has_granules: true,
          time_end: '2050-12-31T23:59:59.000Z',
          orbit_parameters: {},
          id: 'C179003620-ORNL_DAAC',
          has_formats: false,
          original_format: 'ECHO10',
          granule_count: 27,
          archive_center: 'ORNL_DAAC',
          has_temporal_subsetting: false,
          browse_flag: true,
          online_access_flag: true,
          links: [
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/data#',
              hreflang: 'en-US',
              href: 'https://daac.ornl.gov/daacdata/global_climate/global_N_deposition_maps/'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'https://daac.ornl.gov/CLIMATE/guides/global_N_deposition_maps.html'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/metadata#',
              hreflang: 'en-US',
              href: 'https://doi.org/10.3334/ORNLDAAC/830'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'https://daac.ornl.gov/daacdata/global_climate/global_N_deposition_maps/comp/deposition_maps.jpg'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'https://daac.ornl.gov/daacdata/global_climate/global_N_deposition_maps/comp/global_N_deposition_maps.pdf'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'https://daac.ornl.gov/daacdata/global_climate/global_N_deposition_maps/comp/global_N_deposition_maps_readme.pdf'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/browse#',
              hreflang: 'en-US',
              href: 'https://daac.ornl.gov/graphics/browse/sdat-tds/830_1_fit.png'
            },
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/metadata#',
              type: 'application/gml+xml',
              hreflang: 'en-US',
              href: 'https://webmap.ornl.gov/wcsdown/dataset.jsp?ds_id=830'
            }
          ]
        },
        {
          processing_level_id: '1',
          tags: {
            'org.ceos.wgiss.cwic.granules.prod': {}
          },
          boxes: [
            '-90 -180 90 180'
          ],
          time_start: '1996-11-14T00:00:00.000Z',
          dif_ids: [
            '1C_LIS3_STUC00GTD_1.0'
          ],
          version_id: '1.0',
          dataset_id: 'IRS 1C LIS3 Standard Products',
          has_spatial_subsetting: false,
          has_transforms: false,
          has_variables: false,
          data_center: 'ISRO',
          short_name: '1C_LIS3_STUC00GTD',
          organizations: [
            'IN/ISRO/NDC'
          ],
          title: 'IRS 1C LIS3 Standard Products',
          coordinate_system: 'CARTESIAN',
          summary: 'The medium resolution multi-spectral sensor, LISS-3 operates in four spectral bands - B2, B3, B4 in visible near infrared (VNIR) and B5 in Short Wave Infrared \n(SWIR) providing data with 23.5m resolution. Standard products are full scene (path-row) based geo-referenced as well as geo-orthokit  products.',
          has_granules: false,
          time_end: '2007-09-20T23:59:59.000Z',
          orbit_parameters: {},
          id: 'C1443228137-ISRO',
          has_formats: false,
          original_format: 'DIF10',
          granule_count: 0,
          archive_center: 'IN/ISRO/NDC',
          has_temporal_subsetting: false,
          browse_flag: false,
          online_access_flag: true,
          links: [
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/data#',
              hreflang: 'en-US',
              href: 'https://uops.nrsc.gov.in'
            }
          ]
        },
        {
          processing_level_id: '1',
          tags: {
            'org.ceos.wgiss.cwic.granules.prod': {}
          },
          boxes: [
            '-90 -180 90 180'
          ],
          time_start: '1999-10-04T00:00:00.000Z',
          dif_ids: [
            '1C_WIFS_STUC00GTD_1.0'
          ],
          version_id: '1.0',
          dataset_id: 'IRS 1C Standard Geo Referenced Product',
          has_spatial_subsetting: false,
          has_transforms: false,
          has_variables: false,
          data_center: 'ISRO',
          short_name: '1C_WIFS_STUC00GTD',
          organizations: [
            'IN/ISRO/NDC'
          ],
          title: 'IRS 1C Standard Geo Referenced Product',
          coordinate_system: 'CARTESIAN',
          summary: 'The data is acquired in four spectral bands, three in the visible and in NIR (VNIR B2, B3 and B4)and one in the short wave infrared (SWIR B5).The AWiFS camera is realized in two electro-optic modules viz. AWiFS-A and AWiFS-B, providing a combined swath of 740 Km with 56m resolution. Standard products are full scene (path-row) based geo-referenced as well as geo-orthokit  products.',
          has_granules: false,
          time_end: '2007-09-20T23:59:59.000Z',
          orbit_parameters: {},
          id: 'C1443227047-ISRO',
          has_formats: false,
          original_format: 'DIF10',
          granule_count: 0,
          archive_center: 'IN/ISRO/NDC',
          has_temporal_subsetting: false,
          browse_flag: false,
          online_access_flag: true,
          links: [
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/data#',
              hreflang: 'en-US',
              href: 'https://uops.nrsc.gov.in'
            }
          ]
        },
        {
          processing_level_id: '1B',
          tags: {
            'org.ceos.wgiss.cwic.granules.prod': {}
          },
          boxes: [
            '-81.04153 0.843296 81.04153 163.15671'
          ],
          time_start: '2013-10-01T00:00:00.000Z',
          dif_ids: [
            '3DIMG_L1B_STD'
          ],
          version_id: 'Not provided',
          dataset_id: 'INSAT-3D Imager Level-1B Full Acquisition Standard Product',
          has_spatial_subsetting: false,
          has_transforms: false,
          has_variables: false,
          data_center: 'ISRO',
          short_name: '3DIMG_L1B_STD',
          organizations: [
            'IN/ISRO/MOSDAC'
          ],
          title: 'INSAT-3D Imager Level-1B Full Acquisition Standard Product',
          coordinate_system: 'CARTESIAN',
          summary: 'INSAT-3D Imager Level-1B Standard Product containing 6 channels data in HDF-5 Format',
          has_granules: false,
          orbit_parameters: {},
          id: 'C1231649308-ISRO',
          has_formats: false,
          original_format: 'DIF10',
          granule_count: 0,
          archive_center: 'IN/ISRO/MOSDAC',
          has_temporal_subsetting: false,
          browse_flag: false,
          online_access_flag: false,
          links: [
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'http://www.mosdac.gov.in/'
            }
          ]
        },
        {
          processing_level_id: '1',
          tags: {
            'org.ceos.wgiss.cwic.granules.prod': {}
          },
          boxes: [
            '-50 20 50 130'
          ],
          time_start: '2013-10-01T00:00:00.000Z',
          dif_ids: [
            '3DIMG_L1C_SGP'
          ],
          version_id: 'Not provided',
          dataset_id: 'INSAT-3D Imager Level-1C Sector Product',
          has_spatial_subsetting: false,
          has_transforms: false,
          has_variables: false,
          data_center: 'ISRO',
          short_name: '3DIMG_L1C_SGP',
          organizations: [
            'IN/ISRO/MOSDAC'
          ],
          title: 'INSAT-3D Imager Level-1C Sector Product',
          coordinate_system: 'CARTESIAN',
          summary: 'INSAT-3D Imager Level-1C Sector Product (Geocoded, all pixels at same resolution) contains 6 channels data in HDF-5 Format',
          has_granules: false,
          orbit_parameters: {},
          id: 'C1214622563-ISRO',
          has_formats: false,
          original_format: 'DIF10',
          granule_count: 0,
          archive_center: 'IN/ISRO/MOSDAC',
          has_temporal_subsetting: false,
          browse_flag: false,
          online_access_flag: false,
          links: [
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'http://www.mosdac.gov.in/'
            }
          ]
        },
        {
          processing_level_id: '2',
          tags: {
            'org.ceos.wgiss.cwic.granules.prod': {}
          },
          boxes: [
            '-81.04153 0.843296 81.04153 163.15671'
          ],
          time_start: '2013-10-01T00:00:00.000Z',
          dif_ids: [
            '3DIMG_L2B_CMK'
          ],
          version_id: 'Not provided',
          dataset_id: 'INSAT-3D Imager Level-2B Cloud Map',
          has_spatial_subsetting: false,
          has_transforms: false,
          has_variables: false,
          data_center: 'ISRO',
          short_name: '3DIMG_L2B_CMK',
          organizations: [
            'IN/ISRO/MOSDAC'
          ],
          title: 'INSAT-3D Imager Level-2B Cloud Map',
          coordinate_system: 'CARTESIAN',
          summary: 'INSAT-3D Imager Level-2B Cloud Map Product in HDF-5 Format',
          has_granules: false,
          orbit_parameters: {},
          id: 'C1214622564-ISRO',
          has_formats: false,
          original_format: 'DIF10',
          granule_count: 0,
          archive_center: 'IN/ISRO/MOSDAC',
          has_temporal_subsetting: false,
          browse_flag: false,
          online_access_flag: false,
          links: [
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'www.mosdac.gov.in'
            }
          ]
        },
        {
          processing_level_id: '2',
          tags: {
            'org.ceos.wgiss.cwic.granules.prod': {}
          },
          boxes: [
            '-81.04153 0.843296 81.04153 163.15671'
          ],
          time_start: '2013-10-01T00:00:00.000Z',
          dif_ids: [
            '3DIMG_L2B_HEM'
          ],
          version_id: 'Not provided',
          dataset_id: 'INSAT-3D Imager Level-2B Precipitation Using Hydroestimator Technique',
          has_spatial_subsetting: false,
          has_transforms: false,
          has_variables: false,
          data_center: 'ISRO',
          short_name: '3DIMG_L2B_HEM',
          organizations: [
            'IN/ISRO/MOSDAC'
          ],
          title: 'INSAT-3D Imager Level-2B Precipitation Using Hydroestimator Technique',
          coordinate_system: 'CARTESIAN',
          summary: 'INSAT-3D Imager Level-2B Precipitation using Hydroestimator Technique in HDF-5 Format',
          has_granules: false,
          orbit_parameters: {},
          id: 'C1214622538-ISRO',
          has_formats: false,
          original_format: 'DIF10',
          granule_count: 0,
          archive_center: 'IN/ISRO/MOSDAC',
          has_temporal_subsetting: false,
          browse_flag: false,
          online_access_flag: false,
          links: [
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'http://www.mosdac.gov.in/'
            }
          ]
        },
        {
          processing_level_id: '2',
          tags: {
            'org.ceos.wgiss.cwic.granules.prod': {}
          },
          boxes: [
            '-81.04153 0.843296 81.04153 163.15671'
          ],
          time_start: '2013-10-01T00:00:00.000Z',
          dif_ids: [
            '3DIMG_L2B_OLR'
          ],
          version_id: 'Not provided',
          dataset_id: 'INSAT-3D Imager Level-2B Outgoing Longwave Radiation',
          has_spatial_subsetting: false,
          has_transforms: false,
          has_variables: false,
          data_center: 'ISRO',
          short_name: '3DIMG_L2B_OLR',
          organizations: [
            'IN/ISRO/MOSDAC'
          ],
          title: 'INSAT-3D Imager Level-2B Outgoing Longwave Radiation',
          coordinate_system: 'CARTESIAN',
          summary: 'INSAT-3D Imager Level-2B Outgoing Longwave Radation (OLR) in HDF-5 Format',
          has_granules: false,
          orbit_parameters: {},
          id: 'C1214622556-ISRO',
          has_formats: false,
          original_format: 'DIF10',
          granule_count: 0,
          archive_center: 'IN/ISRO/MOSDAC',
          has_temporal_subsetting: false,
          browse_flag: false,
          online_access_flag: false,
          links: [
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'http://www.mosdac.gov.in/'
            }
          ]
        },
        {
          processing_level_id: '2',
          tags: {
            'org.ceos.wgiss.cwic.granules.prod': {}
          },
          boxes: [
            '-81.04153 0.843296 81.04153 163.15671'
          ],
          time_start: '2013-10-01T00:00:00.000Z',
          dif_ids: [
            '3DIMG_L2B_SST'
          ],
          version_id: 'Not provided',
          dataset_id: 'INSAT-3D Imager Level-2B Sea Surface Temperature',
          has_spatial_subsetting: false,
          has_transforms: false,
          has_variables: false,
          data_center: 'ISRO',
          short_name: '3DIMG_L2B_SST',
          organizations: [
            'IN/ISRO/MOSDAC'
          ],
          title: 'INSAT-3D Imager Level-2B Sea Surface Temperature',
          coordinate_system: 'CARTESIAN',
          summary: 'INSAT-3D Imager Level-2B Sea Surface Temperature in HDF-5 Format',
          has_granules: false,
          orbit_parameters: {},
          id: 'C1214622565-ISRO',
          has_formats: false,
          original_format: 'DIF10',
          granule_count: 0,
          archive_center: 'IN/ISRO/MOSDAC',
          has_temporal_subsetting: false,
          browse_flag: false,
          online_access_flag: false,
          links: [
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'http://www.mosdac.gov.in/'
            }
          ]
        },
        {
          processing_level_id: '2',
          tags: {
            'org.ceos.wgiss.cwic.granules.prod': {}
          },
          boxes: [
            '-81.04153 0.843296 81.04153 163.15671'
          ],
          time_start: '2013-10-01T00:00:00.000Z',
          dif_ids: [
            '3DIMG_L2B_UTH'
          ],
          version_id: 'Not provided',
          dataset_id: 'INSAT-3D Imager Level-2B Upper Tropospheric Humidity',
          has_spatial_subsetting: false,
          has_transforms: false,
          has_variables: false,
          data_center: 'ISRO',
          short_name: '3DIMG_L2B_UTH',
          organizations: [
            'IN/ISRO/MOSDAC'
          ],
          title: 'INSAT-3D Imager Level-2B Upper Tropospheric Humidity',
          coordinate_system: 'CARTESIAN',
          summary: 'INSAT-3D Imager Level-2B Upper Tropospheric Humidity (UTH) in HDF-5 Format',
          has_granules: false,
          orbit_parameters: {},
          id: 'C1214622539-ISRO',
          has_formats: false,
          original_format: 'DIF10',
          granule_count: 0,
          archive_center: 'IN/ISRO/MOSDAC',
          has_temporal_subsetting: false,
          browse_flag: false,
          online_access_flag: false,
          links: [
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'http://www.mosdac.gov.in/'
            }
          ]
        },
        {
          processing_level_id: '2',
          tags: {
            'org.ceos.wgiss.cwic.granules.prod': {}
          },
          boxes: [
            '-10 44.5 45.5 105.5'
          ],
          time_start: '2013-10-01T00:00:00.000Z',
          dif_ids: [
            '3DIMG_L2C_FOG'
          ],
          version_id: 'Not provided',
          dataset_id: 'INSAT-3D Imager Level-2C FOG',
          has_spatial_subsetting: false,
          has_transforms: false,
          has_variables: false,
          data_center: 'ISRO',
          short_name: '3DIMG_L2C_FOG',
          organizations: [
            'IN/ISRO/MOSDAC'
          ],
          title: 'INSAT-3D Imager Level-2C FOG',
          coordinate_system: 'CARTESIAN',
          summary: 'INSAT-3D Imager Level-2C FOG Map in HDF-5 Format',
          has_granules: false,
          orbit_parameters: {},
          id: 'C1214622566-ISRO',
          has_formats: false,
          original_format: 'DIF10',
          granule_count: 0,
          archive_center: 'IN/ISRO/MOSDAC',
          has_temporal_subsetting: false,
          browse_flag: false,
          online_access_flag: false,
          links: [
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'http://www.mosdac.gov.in/'
            }
          ]
        },
        {
          processing_level_id: '2',
          tags: {
            'org.ceos.wgiss.cwic.granules.prod': {}
          },
          boxes: [
            '-10.05 44.5 45.5 105.5'
          ],
          time_start: '2013-10-01T00:00:00.000Z',
          dif_ids: [
            '3DIMG_L2C_SNW'
          ],
          version_id: 'Not provided',
          dataset_id: 'INSAT-3D Imager Level-2C SNOW MAP',
          has_spatial_subsetting: false,
          has_transforms: false,
          has_variables: false,
          data_center: 'ISRO',
          short_name: '3DIMG_L2C_SNW',
          organizations: [
            'IN/ISRO/MOSDAC'
          ],
          title: 'INSAT-3D Imager Level-2C SNOW MAP',
          coordinate_system: 'CARTESIAN',
          summary: 'INSAT-3D Imager Level-2C SNOW Map in HDF-5 Format',
          has_granules: false,
          orbit_parameters: {},
          id: 'C1214622557-ISRO',
          has_formats: false,
          original_format: 'DIF10',
          granule_count: 0,
          archive_center: 'IN/ISRO/MOSDAC',
          has_temporal_subsetting: false,
          browse_flag: false,
          online_access_flag: false,
          links: [
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'http://www.mosdac.gov.in/'
            }
          ]
        },
        {
          processing_level_id: '2P',
          tags: {
            'org.ceos.wgiss.cwic.granules.prod': {}
          },
          boxes: [
            '-50 20 50 130'
          ],
          time_start: '2013-10-01T00:00:00.000Z',
          dif_ids: [
            '3DIMG_L2P_IRW'
          ],
          version_id: 'Not provided',
          dataset_id: 'INSAT-3D Imager Level-2P IR WINDS',
          has_spatial_subsetting: false,
          has_transforms: false,
          has_variables: false,
          data_center: 'ISRO',
          short_name: '3DIMG_L2P_IRW',
          organizations: [
            'IN/ISRO/MOSDAC'
          ],
          title: 'INSAT-3D Imager Level-2P IR WINDS',
          coordinate_system: 'CARTESIAN',
          summary: 'Suitable tracers are identified in TIR1 band imagery and tracked in subsequent half-hourly imageries to determine cloud motion vector',
          has_granules: false,
          orbit_parameters: {},
          id: 'C1214622580-ISRO',
          has_formats: false,
          original_format: 'DIF10',
          granule_count: 0,
          archive_center: 'IN/ISRO/MOSDAC',
          has_temporal_subsetting: false,
          browse_flag: false,
          online_access_flag: false,
          links: [
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'http://www.mosdac.gov.in/'
            }
          ]
        },
        {
          processing_level_id: '2P',
          tags: {
            'org.ceos.wgiss.cwic.granules.prod': {}
          },
          boxes: [
            '-50 20 50 130'
          ],
          time_start: '2013-10-01T00:00:00.000Z',
          dif_ids: [
            '3DIMG_L2P_MRW'
          ],
          version_id: 'Not provided',
          dataset_id: 'INSAT-3D Imager Level-2P MIR WINDS',
          has_spatial_subsetting: false,
          has_transforms: false,
          has_variables: false,
          data_center: 'ISRO',
          short_name: '3DIMG_L2P_MRW',
          organizations: [
            'IN/ISRO/MOSDAC'
          ],
          title: 'INSAT-3D Imager Level-2P MIR WINDS',
          coordinate_system: 'CARTESIAN',
          summary: 'Suitable tracers are identified in MIRband imagery and tracked in subsequent half-hourly imageries to determine cloud motion vector',
          has_granules: false,
          orbit_parameters: {},
          id: 'C1214622567-ISRO',
          has_formats: false,
          original_format: 'DIF10',
          granule_count: 0,
          archive_center: 'IN/ISRO/MOSDAC',
          has_temporal_subsetting: false,
          browse_flag: false,
          online_access_flag: false,
          links: [
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'http://www.mosdac.gov.in/'
            }
          ]
        },
        {
          processing_level_id: '2P',
          tags: {
            'org.ceos.wgiss.cwic.granules.prod': {}
          },
          boxes: [
            '-10 60 40 100'
          ],
          time_start: '2013-10-01T00:00:00.000Z',
          dif_ids: [
            '3DIMG_L2P_SMK'
          ],
          version_id: 'Not provided',
          dataset_id: 'INSAT-3D Imager Level-2P SMOKE',
          has_spatial_subsetting: false,
          has_transforms: false,
          has_variables: false,
          data_center: 'ISRO',
          short_name: '3DIMG_L2P_SMK',
          organizations: [
            'IN/ISRO/MOSDAC'
          ],
          title: 'INSAT-3D Imager Level-2P SMOKE',
          coordinate_system: 'CARTESIAN',
          summary: 'This is an Active Smoke product, which identifies pixels having smoke using Visible albedo and Brightness Temperature of MIR, TIR-1 and TIR-2 channels',
          has_granules: false,
          orbit_parameters: {},
          id: 'C1214622568-ISRO',
          has_formats: false,
          original_format: 'DIF10',
          granule_count: 0,
          archive_center: 'IN/ISRO/MOSDAC',
          has_temporal_subsetting: false,
          browse_flag: false,
          online_access_flag: false,
          links: [
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'http://www.mosdac.gov.in/'
            }
          ]
        },
        {
          processing_level_id: '2P',
          tags: {
            'org.ceos.wgiss.cwic.granules.prod': {}
          },
          boxes: [
            '-50 20 50 130'
          ],
          time_start: '2013-10-01T00:00:00.000Z',
          dif_ids: [
            '3DIMG_L2P_VSW'
          ],
          version_id: 'Not provided',
          dataset_id: 'INSAT-3D Imager Level-2P VISIBLE WINDS',
          has_spatial_subsetting: false,
          has_transforms: false,
          has_variables: false,
          data_center: 'ISRO',
          short_name: '3DIMG_L2P_VSW',
          organizations: [
            'IN/ISRO/MOSDAC'
          ],
          title: 'INSAT-3D Imager Level-2P VISIBLE WINDS',
          coordinate_system: 'CARTESIAN',
          summary: 'Suitable tracers are identified in VISIBLE band imagery and tracked in subsequent half-hourly imageries to determine cloud motion vector',
          has_granules: false,
          orbit_parameters: {},
          id: 'C1214622558-ISRO',
          has_formats: false,
          original_format: 'DIF10',
          granule_count: 0,
          archive_center: 'IN/ISRO/MOSDAC',
          has_temporal_subsetting: false,
          browse_flag: false,
          online_access_flag: false,
          links: [
            {
              rel: 'http://esipfed.org/ns/fedsearch/1.1/documentation#',
              hreflang: 'en-US',
              href: 'www.mosdac.gov.in'
            }
          ]
        }
      ],
      facets: {
        title: 'Browse Collections',
        type: 'group',
        has_children: true,
        children: [
          {
            title: 'Keywords',
            type: 'group',
            applied: false,
            has_children: true,
            children: [
              {
                title: 'Aerosols',
                type: 'filter',
                applied: false,
                count: 1,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&science_keywords_h%5B0%5D%5Btopic%5D=Aerosols'
                },
                has_children: true
              },
              {
                title: 'Agriculture',
                type: 'filter',
                applied: false,
                count: 140,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&science_keywords_h%5B0%5D%5Btopic%5D=Agriculture'
                },
                has_children: true
              },
              {
                title: 'Atmosphere',
                type: 'filter',
                applied: false,
                count: 3349,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&science_keywords_h%5B0%5D%5Btopic%5D=Atmosphere'
                },
                has_children: true
              },
              {
                title: 'Atmospheric Temperature',
                type: 'filter',
                applied: false,
                count: 1,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&science_keywords_h%5B0%5D%5Btopic%5D=Atmospheric+Temperature'
                },
                has_children: true
              },
              {
                title: 'Atmospheric Winds',
                type: 'filter',
                applied: false,
                count: 10,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&science_keywords_h%5B0%5D%5Btopic%5D=Atmospheric+Winds'
                },
                has_children: true
              },
              {
                title: 'Biological Classification',
                type: 'filter',
                applied: false,
                count: 12,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&science_keywords_h%5B0%5D%5Btopic%5D=Biological+Classification'
                },
                has_children: true
              },
              {
                title: 'Biosphere',
                type: 'filter',
                applied: false,
                count: 1128,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&science_keywords_h%5B0%5D%5Btopic%5D=Biosphere'
                },
                has_children: true
              },
              {
                title: 'Climate Indicators',
                type: 'filter',
                applied: false,
                count: 80,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&science_keywords_h%5B0%5D%5Btopic%5D=Climate+Indicators'
                },
                has_children: true
              },
              {
                title: 'Cryosphere',
                type: 'filter',
                applied: false,
                count: 372,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&science_keywords_h%5B0%5D%5Btopic%5D=Cryosphere'
                },
                has_children: true
              },
              {
                title: 'Data Analysis And Visualization',
                type: 'filter',
                applied: false,
                count: 1,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&science_keywords_h%5B0%5D%5Btopic%5D=Data+Analysis+And+Visualization'
                },
                has_children: true
              },
              {
                title: 'Earth Observation Satellites',
                type: 'filter',
                applied: false,
                count: 1,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&science_keywords_h%5B0%5D%5Btopic%5D=Earth+Observation+Satellites'
                },
                has_children: true
              },
              {
                title: 'Earth Remote Sensing Instruments',
                type: 'filter',
                applied: false,
                count: 1,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&science_keywords_h%5B0%5D%5Btopic%5D=Earth+Remote+Sensing+Instruments'
                },
                has_children: true
              },
              {
                title: 'Environmental Advisories',
                type: 'filter',
                applied: false,
                count: 20,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&science_keywords_h%5B0%5D%5Btopic%5D=Environmental+Advisories'
                },
                has_children: true
              },
              {
                title: 'Human Dimensions',
                type: 'filter',
                applied: false,
                count: 290,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&science_keywords_h%5B0%5D%5Btopic%5D=Human+Dimensions'
                },
                has_children: true
              },
              {
                title: 'Hydrosphere',
                type: 'filter',
                applied: false,
                count: 22,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&science_keywords_h%5B0%5D%5Btopic%5D=Hydrosphere'
                },
                has_children: true
              },
              {
                title: 'Land Surface',
                type: 'filter',
                applied: false,
                count: 1792,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&science_keywords_h%5B0%5D%5Btopic%5D=Land+Surface'
                },
                has_children: true
              },
              {
                title: 'Models',
                type: 'filter',
                applied: false,
                count: 8,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&science_keywords_h%5B0%5D%5Btopic%5D=Models'
                },
                has_children: true
              },
              {
                title: 'None',
                type: 'filter',
                applied: false,
                count: 1,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&science_keywords_h%5B0%5D%5Btopic%5D=None'
                },
                has_children: true
              },
              {
                title: 'Oceans',
                type: 'filter',
                applied: false,
                count: 1137,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&science_keywords_h%5B0%5D%5Btopic%5D=Oceans'
                },
                has_children: true
              },
              {
                title: 'Oceans-T',
                type: 'filter',
                applied: false,
                count: 1,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&science_keywords_h%5B0%5D%5Btopic%5D=Oceans-T'
                },
                has_children: true
              },
              {
                title: 'Photograph',
                type: 'filter',
                applied: false,
                count: 1,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&science_keywords_h%5B0%5D%5Btopic%5D=Photograph'
                },
                has_children: true
              },
              {
                title: 'Radiance Or Imagery',
                type: 'filter',
                applied: false,
                count: 25,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&science_keywords_h%5B0%5D%5Btopic%5D=Radiance+Or+Imagery'
                },
                has_children: true
              },
              {
                title: 'Solid Earth',
                type: 'filter',
                applied: false,
                count: 169,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&science_keywords_h%5B0%5D%5Btopic%5D=Solid+Earth'
                },
                has_children: true
              },
              {
                title: 'Spectral/Engineering',
                type: 'filter',
                applied: false,
                count: 1444,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&science_keywords_h%5B0%5D%5Btopic%5D=Spectral%2FEngineering'
                },
                has_children: true
              },
              {
                title: 'Sun-Earth Interactions',
                type: 'filter',
                applied: false,
                count: 43,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&science_keywords_h%5B0%5D%5Btopic%5D=Sun-Earth+Interactions'
                },
                has_children: true
              },
              {
                title: 'Terrestrial Hydrosphere',
                type: 'filter',
                applied: false,
                count: 350,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&science_keywords_h%5B0%5D%5Btopic%5D=Terrestrial+Hydrosphere'
                },
                has_children: true
              }
            ]
          },
          {
            title: 'Platforms',
            type: 'group',
            applied: false,
            has_children: true,
            children: [
              {
                title: 'AIRCRAFT',
                type: 'filter',
                applied: false,
                count: 93,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&platform_h%5B%5D=AIRCRAFT'
                },
                has_children: false
              },
              {
                title: 'Aqua',
                type: 'filter',
                applied: false,
                count: 747,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&platform_h%5B%5D=Aqua'
                },
                has_children: false
              },
              {
                title: 'Aquarius_SAC-D',
                type: 'filter',
                applied: false,
                count: 158,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&platform_h%5B%5D=Aquarius_SAC-D'
                },
                has_children: false
              },
              {
                title: 'Aura',
                type: 'filter',
                applied: false,
                count: 453,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&platform_h%5B%5D=Aura'
                },
                has_children: false
              },
              {
                title: 'C-130',
                type: 'filter',
                applied: false,
                count: 61,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&platform_h%5B%5D=C-130'
                },
                has_children: false
              },
              {
                title: 'CALIPSO',
                type: 'filter',
                applied: false,
                count: 101,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&platform_h%5B%5D=CALIPSO'
                },
                has_children: false
              },
              {
                title: 'DC-8',
                type: 'filter',
                applied: false,
                count: 72,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&platform_h%5B%5D=DC-8'
                },
                has_children: false
              },
              {
                title: 'DMSP 5D-3/F17',
                type: 'filter',
                applied: false,
                count: 59,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&platform_h%5B%5D=DMSP+5D-3%2FF17'
                },
                has_children: false
              },
              {
                title: 'ENVISAT',
                type: 'filter',
                applied: false,
                count: 56,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&platform_h%5B%5D=ENVISAT'
                },
                has_children: false
              },
              {
                title: 'Field Investigation',
                type: 'filter',
                applied: false,
                count: 491,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&platform_h%5B%5D=Field+Investigation'
                },
                has_children: false
              },
              {
                title: 'Field Survey',
                type: 'filter',
                applied: false,
                count: 126,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&platform_h%5B%5D=Field+Survey'
                },
                has_children: false
              },
              {
                title: 'Fixed Observation Stations',
                type: 'filter',
                applied: false,
                count: 59,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&platform_h%5B%5D=Fixed+Observation+Stations'
                },
                has_children: false
              },
              {
                title: 'GCOM-W1',
                type: 'filter',
                applied: false,
                count: 67,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&platform_h%5B%5D=GCOM-W1'
                },
                has_children: false
              },
              {
                title: 'GOES-8',
                type: 'filter',
                applied: false,
                count: 53,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&platform_h%5B%5D=GOES-8'
                },
                has_children: false
              },
              {
                title: 'GPM',
                type: 'filter',
                applied: false,
                count: 61,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&platform_h%5B%5D=GPM'
                },
                has_children: false
              },
              {
                title: 'Ground Station',
                type: 'filter',
                applied: false,
                count: 436,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&platform_h%5B%5D=Ground+Station'
                },
                has_children: false
              },
              {
                title: 'Ground-based Observation',
                type: 'filter',
                applied: false,
                count: 92,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&platform_h%5B%5D=Ground-based+Observation'
                },
                has_children: false
              },
              {
                title: 'ICESat',
                type: 'filter',
                applied: false,
                count: 60,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&platform_h%5B%5D=ICESat'
                },
                has_children: false
              },
              {
                title: 'ICESat-2',
                type: 'filter',
                applied: false,
                count: 60,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&platform_h%5B%5D=ICESat-2'
                },
                has_children: false
              },
              {
                title: 'International Space Station',
                type: 'filter',
                applied: false,
                count: 90,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&platform_h%5B%5D=International+Space+Station'
                },
                has_children: false
              },
              {
                title: 'Laboratory',
                type: 'filter',
                applied: false,
                count: 146,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&platform_h%5B%5D=Laboratory'
                },
                has_children: false
              },
              {
                title: 'Landsat-5',
                type: 'filter',
                applied: false,
                count: 99,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&platform_h%5B%5D=Landsat-5'
                },
                has_children: false
              },
              {
                title: 'Landsat-7',
                type: 'filter',
                applied: false,
                count: 72,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&platform_h%5B%5D=Landsat-7'
                },
                has_children: false
              },
              {
                title: 'MERRA',
                type: 'filter',
                applied: false,
                count: 215,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&platform_h%5B%5D=MERRA'
                },
                has_children: false
              },
              {
                title: 'MERRA-2',
                type: 'filter',
                applied: false,
                count: 96,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&platform_h%5B%5D=MERRA-2'
                },
                has_children: false
              },
              {
                title: 'Meteorological Station',
                type: 'filter',
                applied: false,
                count: 121,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&platform_h%5B%5D=Meteorological+Station'
                },
                has_children: false
              },
              {
                title: 'METEOSAT-4',
                type: 'filter',
                applied: false,
                count: 51,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&platform_h%5B%5D=METEOSAT-4'
                },
                has_children: false
              },
              {
                title: 'MetOp-A',
                type: 'filter',
                applied: false,
                count: 72,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&platform_h%5B%5D=MetOp-A'
                },
                has_children: false
              },
              {
                title: 'Model',
                type: 'filter',
                applied: false,
                count: 376,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&platform_h%5B%5D=Model'
                },
                has_children: false
              },
              {
                title: 'NASA Douglas DC-8',
                type: 'filter',
                applied: false,
                count: 138,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&platform_h%5B%5D=NASA+Douglas+DC-8'
                },
                has_children: false
              },
              {
                title: 'NASA ER-2',
                type: 'filter',
                applied: false,
                count: 167,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&platform_h%5B%5D=NASA+ER-2'
                },
                has_children: false
              },
              {
                title: 'Nimbus-7',
                type: 'filter',
                applied: false,
                count: 68,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&platform_h%5B%5D=Nimbus-7'
                },
                has_children: false
              },
              {
                title: 'NOAA-7',
                type: 'filter',
                applied: false,
                count: 109,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&platform_h%5B%5D=NOAA-7'
                },
                has_children: false
              },
              {
                title: 'NOAA-8',
                type: 'filter',
                applied: false,
                count: 64,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&platform_h%5B%5D=NOAA-8'
                },
                has_children: false
              },
              {
                title: 'NOAA-9',
                type: 'filter',
                applied: false,
                count: 180,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&platform_h%5B%5D=NOAA-9'
                },
                has_children: false
              },
              {
                title: 'NOAA-10',
                type: 'filter',
                applied: false,
                count: 118,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&platform_h%5B%5D=NOAA-10'
                },
                has_children: false
              },
              {
                title: 'NOAA-11',
                type: 'filter',
                applied: false,
                count: 150,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&platform_h%5B%5D=NOAA-11'
                },
                has_children: false
              },
              {
                title: 'NOAA-12',
                type: 'filter',
                applied: false,
                count: 90,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&platform_h%5B%5D=NOAA-12'
                },
                has_children: false
              },
              {
                title: 'NOAA-14',
                type: 'filter',
                applied: false,
                count: 126,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&platform_h%5B%5D=NOAA-14'
                },
                has_children: false
              },
              {
                title: 'NOAA-16',
                type: 'filter',
                applied: false,
                count: 84,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&platform_h%5B%5D=NOAA-16'
                },
                has_children: false
              },
              {
                title: 'NOAA-17',
                type: 'filter',
                applied: false,
                count: 88,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&platform_h%5B%5D=NOAA-17'
                },
                has_children: false
              },
              {
                title: 'NOAA-18',
                type: 'filter',
                applied: false,
                count: 56,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&platform_h%5B%5D=NOAA-18'
                },
                has_children: false
              },
              {
                title: 'NOAA-19',
                type: 'filter',
                applied: false,
                count: 104,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&platform_h%5B%5D=NOAA-19'
                },
                has_children: false
              },
              {
                title: 'NOAA-20',
                type: 'filter',
                applied: false,
                count: 78,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&platform_h%5B%5D=NOAA-20'
                },
                has_children: false
              },
              {
                title: 'OrbView-2',
                type: 'filter',
                applied: false,
                count: 53,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&platform_h%5B%5D=OrbView-2'
                },
                has_children: false
              },
              {
                title: 'P-3B',
                type: 'filter',
                applied: false,
                count: 61,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&platform_h%5B%5D=P-3B'
                },
                has_children: false
              },
              {
                title: 'SMAP',
                type: 'filter',
                applied: false,
                count: 75,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&platform_h%5B%5D=SMAP'
                },
                has_children: false
              },
              {
                title: 'Suomi-NPP',
                type: 'filter',
                applied: false,
                count: 274,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&platform_h%5B%5D=Suomi-NPP'
                },
                has_children: false
              },
              {
                title: 'Terra',
                type: 'filter',
                applied: false,
                count: 947,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&platform_h%5B%5D=Terra'
                },
                has_children: false
              },
              {
                title: 'TRMM',
                type: 'filter',
                applied: false,
                count: 137,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2&platform_h%5B%5D=TRMM'
                },
                has_children: false
              }
            ]
          },
          {
            title: 'Instruments',
            type: 'group',
            applied: false,
            has_children: true,
            children: [
              {
                title: 'AIRS',
                type: 'filter',
                applied: false,
                count: 73,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&instrument_h%5B%5D=AIRS&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'AMSR2',
                type: 'filter',
                applied: false,
                count: 67,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&instrument_h%5B%5D=AMSR2&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'AMSR-E',
                type: 'filter',
                applied: false,
                count: 128,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&instrument_h%5B%5D=AMSR-E&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'Anemometer',
                type: 'filter',
                applied: false,
                count: 73,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&instrument_h%5B%5D=Anemometer&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'Aquarius_Radiometer',
                type: 'filter',
                applied: false,
                count: 149,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&instrument_h%5B%5D=Aquarius_Radiometer&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'Aquarius_Scatterometer',
                type: 'filter',
                applied: false,
                count: 160,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&instrument_h%5B%5D=Aquarius_Scatterometer&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'ASTER',
                type: 'filter',
                applied: false,
                count: 54,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&instrument_h%5B%5D=ASTER&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'ATLAS',
                type: 'filter',
                applied: false,
                count: 60,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&instrument_h%5B%5D=ATLAS&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'AVHRR',
                type: 'filter',
                applied: false,
                count: 164,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&instrument_h%5B%5D=AVHRR&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'AVHRR-3',
                type: 'filter',
                applied: false,
                count: 117,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&instrument_h%5B%5D=AVHRR-3&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'BALANCE',
                type: 'filter',
                applied: false,
                count: 158,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&instrument_h%5B%5D=BALANCE&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'Barometer',
                type: 'filter',
                applied: false,
                count: 60,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&instrument_h%5B%5D=Barometer&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'CALIOP',
                type: 'filter',
                applied: false,
                count: 63,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&instrument_h%5B%5D=CALIOP&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'Camera',
                type: 'filter',
                applied: false,
                count: 56,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&instrument_h%5B%5D=Camera&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'CERES-FM1',
                type: 'filter',
                applied: false,
                count: 54,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&instrument_h%5B%5D=CERES-FM1&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'Computer',
                type: 'filter',
                applied: false,
                count: 329,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&instrument_h%5B%5D=Computer&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'Coring Devices',
                type: 'filter',
                applied: false,
                count: 80,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&instrument_h%5B%5D=Coring+Devices&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'ETM+',
                type: 'filter',
                applied: false,
                count: 84,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&instrument_h%5B%5D=ETM%2B&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'GLAS',
                type: 'filter',
                applied: false,
                count: 59,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&instrument_h%5B%5D=GLAS&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'GPS Receivers',
                type: 'filter',
                applied: false,
                count: 120,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&instrument_h%5B%5D=GPS+Receivers&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'Humidity Sensor',
                type: 'filter',
                applied: false,
                count: 71,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&instrument_h%5B%5D=Humidity+Sensor&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'Hygrometer',
                type: 'filter',
                applied: false,
                count: 83,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&instrument_h%5B%5D=Hygrometer&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'InSitu',
                type: 'filter',
                applied: false,
                count: 50,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&instrument_h%5B%5D=InSitu&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'LIDAR',
                type: 'filter',
                applied: false,
                count: 62,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&instrument_h%5B%5D=LIDAR&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'MISR',
                type: 'filter',
                applied: false,
                count: 202,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&instrument_h%5B%5D=MISR&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'MLS',
                type: 'filter',
                applied: false,
                count: 85,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&instrument_h%5B%5D=MLS&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'MODIS',
                type: 'filter',
                applied: false,
                count: 984,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&instrument_h%5B%5D=MODIS&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'MOPITT',
                type: 'filter',
                applied: false,
                count: 65,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&instrument_h%5B%5D=MOPITT&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'NET RADIOMETERS',
                type: 'filter',
                applied: false,
                count: 50,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&instrument_h%5B%5D=NET+RADIOMETERS&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'NEXRAD',
                type: 'filter',
                applied: false,
                count: 84,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&instrument_h%5B%5D=NEXRAD&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'OMI',
                type: 'filter',
                applied: false,
                count: 69,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&instrument_h%5B%5D=OMI&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'Pyranometer',
                type: 'filter',
                applied: false,
                count: 125,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&instrument_h%5B%5D=Pyranometer&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'QUADRATS',
                type: 'filter',
                applied: false,
                count: 76,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&instrument_h%5B%5D=QUADRATS&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'Radiosonde',
                type: 'filter',
                applied: false,
                count: 51,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&instrument_h%5B%5D=Radiosonde&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'RAIN GAUGES',
                type: 'filter',
                applied: false,
                count: 173,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&instrument_h%5B%5D=RAIN+GAUGES&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'SAR',
                type: 'filter',
                applied: false,
                count: 106,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&instrument_h%5B%5D=SAR&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'SeaWiFS',
                type: 'filter',
                applied: false,
                count: 55,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&instrument_h%5B%5D=SeaWiFS&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'SEVIRI',
                type: 'filter',
                applied: false,
                count: 78,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&instrument_h%5B%5D=SEVIRI&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'SSM/I',
                type: 'filter',
                applied: false,
                count: 170,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&instrument_h%5B%5D=SSM%2FI&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'SSMIS',
                type: 'filter',
                applied: false,
                count: 81,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&instrument_h%5B%5D=SSMIS&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'Steel Measuring Tape',
                type: 'filter',
                applied: false,
                count: 116,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&instrument_h%5B%5D=Steel+Measuring+Tape&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'Temperature Probe',
                type: 'filter',
                applied: false,
                count: 62,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&instrument_h%5B%5D=Temperature+Probe&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'TES',
                type: 'filter',
                applied: false,
                count: 297,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&instrument_h%5B%5D=TES&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'THERMOCOUPLES',
                type: 'filter',
                applied: false,
                count: 52,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&instrument_h%5B%5D=THERMOCOUPLES&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'Thermometer',
                type: 'filter',
                applied: false,
                count: 89,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&instrument_h%5B%5D=Thermometer&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'TM',
                type: 'filter',
                applied: false,
                count: 108,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&instrument_h%5B%5D=TM&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'TMI',
                type: 'filter',
                applied: false,
                count: 67,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&instrument_h%5B%5D=TMI&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'VIIRS',
                type: 'filter',
                applied: false,
                count: 294,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&instrument_h%5B%5D=VIIRS&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'VISSR',
                type: 'filter',
                applied: false,
                count: 56,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&instrument_h%5B%5D=VISSR&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'Visual Observations',
                type: 'filter',
                applied: false,
                count: 179,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&instrument_h%5B%5D=Visual+Observations&sort_key%5B%5D=has_granules_or_cwic&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              }
            ]
          },
          {
            title: 'Organizations',
            type: 'group',
            applied: false,
            has_children: true,
            children: [
              {
                title: 'Agriculture and Agri-Food Canada (AAFC)',
                type: 'filter',
                applied: false,
                count: 15,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&data_center_h%5B%5D=Agriculture+and+Agri-Food+Canada+%28AAFC%29&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'Alaska Satellite Facility',
                type: 'filter',
                applied: false,
                count: 165,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&data_center_h%5B%5D=Alaska+Satellite+Facility&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'AMSR-E Science Investigator-Led Processing System (AMSR-E SIPS)',
                type: 'filter',
                applied: false,
                count: 21,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&data_center_h%5B%5D=AMSR-E+Science+Investigator-Led+Processing+System+%28AMSR-E+SIPS%29&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'Aquarius Project NASA/OBPG, Reynolds & Smith NOAA/NCDC',
                type: 'filter',
                applied: false,
                count: 23,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&data_center_h%5B%5D=Aquarius+Project+NASA%2FOBPG%2C+Reynolds+%26+Smith+NOAA%2FNCDC&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'Atmospheric Science Data Center (ASDC)',
                type: 'filter',
                applied: false,
                count: 1244,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&data_center_h%5B%5D=Atmospheric+Science+Data+Center+%28ASDC%29&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'Comision Nacional de Actividades Espaciales (CONAE)',
                type: 'filter',
                applied: false,
                count: 159,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&data_center_h%5B%5D=Comision+Nacional+de+Actividades+Espaciales+%28CONAE%29&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'Crustal Dynamics Data Information System (CDDIS)',
                type: 'filter',
                applied: false,
                count: 28,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&data_center_h%5B%5D=Crustal+Dynamics+Data+Information+System+%28CDDIS%29&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'DOC/NOAA/NESDIS/NCEI',
                type: 'filter',
                applied: false,
                count: 71,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&data_center_h%5B%5D=DOC%2FNOAA%2FNESDIS%2FNCEI&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'Earth Resources Observation and Science Center (EROS)',
                type: 'filter',
                applied: false,
                count: 36,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&data_center_h%5B%5D=Earth+Resources+Observation+and+Science+Center+%28EROS%29&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'EDOS',
                type: 'filter',
                applied: false,
                count: 26,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&data_center_h%5B%5D=EDOS&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'EOS Data and Operations System Project, Code 510.2',
                type: 'filter',
                applied: false,
                count: 26,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&data_center_h%5B%5D=EOS+Data+and+Operations+System+Project%2C+Code+510.2&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'ESA/CS1CGS',
                type: 'filter',
                applied: false,
                count: 15,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&data_center_h%5B%5D=ESA%2FCS1CGS&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'EUMETSAT Ocean and Sea Ice Satellite Application Facility (OSI SAF)',
                type: 'filter',
                applied: false,
                count: 29,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&data_center_h%5B%5D=EUMETSAT+Ocean+and+Sea+Ice+Satellite+Application+Facility+%28OSI+SAF%29&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'European Organisation for the Exploitation of Meteorological Satellites (EUMETSAT)',
                type: 'filter',
                applied: false,
                count: 26,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&data_center_h%5B%5D=European+Organisation+for+the+Exploitation+of+Meteorological+Satellites+%28EUMETSAT%29&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'Global Hydrology Resource Center (GHRC)',
                type: 'filter',
                applied: false,
                count: 951,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&data_center_h%5B%5D=Global+Hydrology+Resource+Center+%28GHRC%29&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'Goddard Earth Sciences Data and Information Services Center (GES DISC)',
                type: 'filter',
                applied: false,
                count: 1278,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&data_center_h%5B%5D=Goddard+Earth+Sciences+Data+and+Information+Services+Center+%28GES+DISC%29&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'ICESat Science Investigator-led Processing System (I-SIPS)',
                type: 'filter',
                applied: false,
                count: 16,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&data_center_h%5B%5D=ICESat+Science+Investigator-led+Processing+System+%28I-SIPS%29&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'IN/ISRO/MOSDAC',
                type: 'filter',
                applied: false,
                count: 20,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&data_center_h%5B%5D=IN%2FISRO%2FMOSDAC&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'Jet Propulsion Laboratory (JPL)',
                type: 'filter',
                applied: false,
                count: 112,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&data_center_h%5B%5D=Jet+Propulsion+Laboratory+%28JPL%29&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'Land Process Distributed Active Archive Center (LPDAAC)',
                type: 'filter',
                applied: false,
                count: 566,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&data_center_h%5B%5D=Land+Process+Distributed+Active+Archive+Center+%28LPDAAC%29&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'Land Science Investigator-Led Processing System (LandSIPS)',
                type: 'filter',
                applied: false,
                count: 123,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&data_center_h%5B%5D=Land+Science+Investigator-Led+Processing+System+%28LandSIPS%29&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'Level-1 and Atmosphere Archive & Distribution System (LAADS)',
                type: 'filter',
                applied: false,
                count: 80,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&data_center_h%5B%5D=Level-1+and+Atmosphere+Archive+%26+Distribution+System+%28LAADS%29&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'MODIS Adaptive Processing System (MODAPS)',
                type: 'filter',
                applied: false,
                count: 283,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&data_center_h%5B%5D=MODIS+Adaptive+Processing+System+%28MODAPS%29&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'MODIS Science Data Support Team (SDST)',
                type: 'filter',
                applied: false,
                count: 25,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&data_center_h%5B%5D=MODIS+Science+Data+Support+Team+%28SDST%29&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'NASA/GSFC/EOS/EO',
                type: 'filter',
                applied: false,
                count: 18,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&data_center_h%5B%5D=NASA%2FGSFC%2FEOS%2FEO&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'NASA/GSFC/EOS/ESDIS',
                type: 'filter',
                applied: false,
                count: 55,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&data_center_h%5B%5D=NASA%2FGSFC%2FEOS%2FESDIS&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'NASA/GSFC/SED/ESD/BSL/VCST',
                type: 'filter',
                applied: false,
                count: 27,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&data_center_h%5B%5D=NASA%2FGSFC%2FSED%2FESD%2FBSL%2FVCST&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'NASA/GSFC/SED/ESD/GMAO',
                type: 'filter',
                applied: false,
                count: 22,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&data_center_h%5B%5D=NASA%2FGSFC%2FSED%2FESD%2FGMAO&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'NASA/GSFC/SED/ESD/LRSL',
                type: 'filter',
                applied: false,
                count: 17,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&data_center_h%5B%5D=NASA%2FGSFC%2FSED%2FESD%2FLRSL&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'NASA/GSFC/SED/ESD/TISL/MODAPS',
                type: 'filter',
                applied: false,
                count: 176,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&data_center_h%5B%5D=NASA%2FGSFC%2FSED%2FESD%2FTISL%2FMODAPS&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'NASA/JPL/ECOSTRESS',
                type: 'filter',
                applied: false,
                count: 17,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&data_center_h%5B%5D=NASA%2FJPL%2FECOSTRESS&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'NASA/JPL/ESSD',
                type: 'filter',
                applied: false,
                count: 18,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&data_center_h%5B%5D=NASA%2FJPL%2FESSD&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'NASA/JPL/TES',
                type: 'filter',
                applied: false,
                count: 59,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&data_center_h%5B%5D=NASA%2FJPL%2FTES&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'National Snow and Ice Data Center (NSIDC)',
                type: 'filter',
                applied: false,
                count: 185,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&data_center_h%5B%5D=National+Snow+and+Ice+Data+Center+%28NSIDC%29&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'National Snow and Ice Data Center Distributed Active Archive Center (NSIDC DAAC)',
                type: 'filter',
                applied: false,
                count: 477,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&data_center_h%5B%5D=National+Snow+and+Ice+Data+Center+Distributed+Active+Archive+Center+%28NSIDC+DAAC%29&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'Naval Oceanographic Office (NAVOCEANO)',
                type: 'filter',
                applied: false,
                count: 16,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&data_center_h%5B%5D=Naval+Oceanographic+Office+%28NAVOCEANO%29&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'NSIDC DAAC User Services',
                type: 'filter',
                applied: false,
                count: 18,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&data_center_h%5B%5D=NSIDC+DAAC+User+Services&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'Oak Ridge National Laboratory Distributed Active Archive Center (ORNL DAAC)',
                type: 'filter',
                applied: false,
                count: 1436,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&data_center_h%5B%5D=Oak+Ridge+National+Laboratory+Distributed+Active+Archive+Center+%28ORNL+DAAC%29&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'Ocean Biology Distributed Active Archive Center (OB.DAAC)',
                type: 'filter',
                applied: false,
                count: 240,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&data_center_h%5B%5D=Ocean+Biology+Distributed+Active+Archive+Center+%28OB.DAAC%29&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'Ocean Biology Processing Group (OBPG)',
                type: 'filter',
                applied: false,
                count: 48,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&data_center_h%5B%5D=Ocean+Biology+Processing+Group+%28OBPG%29&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'Physical Oceanography Distributed Active Archive Center (PO.DAAC)',
                type: 'filter',
                applied: false,
                count: 490,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&data_center_h%5B%5D=Physical+Oceanography+Distributed+Active+Archive+Center+%28PO.DAAC%29&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'Remote Sensing Systems (RSS)',
                type: 'filter',
                applied: false,
                count: 18,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&data_center_h%5B%5D=Remote+Sensing+Systems+%28RSS%29&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'Salinity Processes in the Upper Ocean Regional Study (SPURS)',
                type: 'filter',
                applied: false,
                count: 35,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&data_center_h%5B%5D=Salinity+Processes+in+the+Upper+Ocean+Regional+Study+%28SPURS%29&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'SeaWinds Processing and Analysis Center (SeaPAC)',
                type: 'filter',
                applied: false,
                count: 20,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&data_center_h%5B%5D=SeaWinds+Processing+and+Analysis+Center+%28SeaPAC%29&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'Shuttle Radar Topography Mission (SRTM)',
                type: 'filter',
                applied: false,
                count: 20,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&data_center_h%5B%5D=Shuttle+Radar+Topography+Mission+%28SRTM%29&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'Socioeconomic Data and Applications Center (SEDAC)',
                type: 'filter',
                applied: false,
                count: 232,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&data_center_h%5B%5D=Socioeconomic+Data+and+Applications+Center+%28SEDAC%29&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'Soil Moisture Active Passive (SMAP)',
                type: 'filter',
                applied: false,
                count: 69,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&data_center_h%5B%5D=Soil+Moisture+Active+Passive+%28SMAP%29&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'Tropospheric Emission Spectrometer SIPS (TES SIPS)',
                type: 'filter',
                applied: false,
                count: 51,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&data_center_h%5B%5D=Tropospheric+Emission+Spectrometer+SIPS+%28TES+SIPS%29&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'UCAR/NCAR/ACOM',
                type: 'filter',
                applied: false,
                count: 21,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&data_center_h%5B%5D=UCAR%2FNCAR%2FACOM&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'University of Texas Institute for Geophysics (UTIG)',
                type: 'filter',
                applied: false,
                count: 17,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&data_center_h%5B%5D=University+of+Texas+Institute+for+Geophysics+%28UTIG%29&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              }
            ]
          },
          {
            title: 'Projects',
            type: 'group',
            applied: false,
            has_children: true,
            children: [
              {
                title: '2011_GR_NASA',
                type: 'filter',
                applied: false,
                count: 28,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&project_h%5B%5D=2011_GR_NASA&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: '2012_GR_NASA',
                type: 'filter',
                applied: false,
                count: 28,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&project_h%5B%5D=2012_GR_NASA&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: '2013_GR_NASA',
                type: 'filter',
                applied: false,
                count: 31,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&project_h%5B%5D=2013_GR_NASA&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'ABoVE',
                type: 'filter',
                applied: false,
                count: 143,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&project_h%5B%5D=ABoVE&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'AQUARIUS SAC-D',
                type: 'filter',
                applied: false,
                count: 186,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&project_h%5B%5D=AQUARIUS+SAC-D&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'ATDD',
                type: 'filter',
                applied: false,
                count: 30,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&project_h%5B%5D=ATDD&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'BOREAS',
                type: 'filter',
                applied: false,
                count: 303,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&project_h%5B%5D=BOREAS&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'CAMEX-3',
                type: 'filter',
                applied: false,
                count: 43,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&project_h%5B%5D=CAMEX-3&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'CAMEX-4',
                type: 'filter',
                applied: false,
                count: 80,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&project_h%5B%5D=CAMEX-4&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'CARVE',
                type: 'filter',
                applied: false,
                count: 28,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&project_h%5B%5D=CARVE&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'CATS-ISS',
                type: 'filter',
                applied: false,
                count: 27,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&project_h%5B%5D=CATS-ISS&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'CERES',
                type: 'filter',
                applied: false,
                count: 143,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&project_h%5B%5D=CERES&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'CMS',
                type: 'filter',
                applied: false,
                count: 78,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&project_h%5B%5D=CMS&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'Copernicus Sentinel',
                type: 'filter',
                applied: false,
                count: 43,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&project_h%5B%5D=Copernicus+Sentinel&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'CWIC',
                type: 'filter',
                applied: false,
                count: 87,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&project_h%5B%5D=CWIC&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'DISCOVER',
                type: 'filter',
                applied: false,
                count: 76,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&project_h%5B%5D=DISCOVER&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'EOS',
                type: 'filter',
                applied: false,
                count: 66,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&project_h%5B%5D=EOS&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'FIFE',
                type: 'filter',
                applied: false,
                count: 115,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&project_h%5B%5D=FIFE&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'FIRE',
                type: 'filter',
                applied: false,
                count: 131,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&project_h%5B%5D=FIRE&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'GCPEx',
                type: 'filter',
                applied: false,
                count: 88,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&project_h%5B%5D=GCPEx&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'GHRSST',
                type: 'filter',
                applied: false,
                count: 91,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&project_h%5B%5D=GHRSST&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'GOES-R PLT',
                type: 'filter',
                applied: false,
                count: 34,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&project_h%5B%5D=GOES-R+PLT&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'GPW',
                type: 'filter',
                applied: false,
                count: 35,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&project_h%5B%5D=GPW&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'GRIP (HURRICANE)',
                type: 'filter',
                applied: false,
                count: 46,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&project_h%5B%5D=GRIP+%28HURRICANE%29&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'HS3',
                type: 'filter',
                applied: false,
                count: 30,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&project_h%5B%5D=HS3&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'IFloodS',
                type: 'filter',
                applied: false,
                count: 64,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&project_h%5B%5D=IFloodS&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'IPHEx',
                type: 'filter',
                applied: false,
                count: 92,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&project_h%5B%5D=IPHEx&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'ISLSCP II',
                type: 'filter',
                applied: false,
                count: 51,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&project_h%5B%5D=ISLSCP+II&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'Kings Canyon, CA',
                type: 'filter',
                applied: false,
                count: 26,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&project_h%5B%5D=Kings+Canyon%2C+CA&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'LANCE',
                type: 'filter',
                applied: false,
                count: 57,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&project_h%5B%5D=LANCE&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'LBA-ECO',
                type: 'filter',
                applied: false,
                count: 264,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&project_h%5B%5D=LBA-ECO&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'LPVEX',
                type: 'filter',
                applied: false,
                count: 31,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&project_h%5B%5D=LPVEX&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'MC3E',
                type: 'filter',
                applied: false,
                count: 68,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&project_h%5B%5D=MC3E&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'MEaSUREs',
                type: 'filter',
                applied: false,
                count: 144,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&project_h%5B%5D=MEaSUREs&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'MERRA TIME-MEAN OBSERVATION DATA',
                type: 'filter',
                applied: false,
                count: 144,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&project_h%5B%5D=MERRA+TIME-MEAN+OBSERVATION+DATA&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'NACP',
                type: 'filter',
                applied: false,
                count: 65,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&project_h%5B%5D=NACP&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'NAMMA',
                type: 'filter',
                applied: false,
                count: 44,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&project_h%5B%5D=NAMMA&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'NARSTO',
                type: 'filter',
                applied: false,
                count: 60,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&project_h%5B%5D=NARSTO&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'NDH',
                type: 'filter',
                applied: false,
                count: 29,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&project_h%5B%5D=NDH&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'Nimbus',
                type: 'filter',
                applied: false,
                count: 47,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&project_h%5B%5D=Nimbus&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'NPP-JPSS',
                type: 'filter',
                applied: false,
                count: 137,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&project_h%5B%5D=NPP-JPSS&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'OCO',
                type: 'filter',
                applied: false,
                count: 31,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&project_h%5B%5D=OCO&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'OLYMPEX',
                type: 'filter',
                applied: false,
                count: 72,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&project_h%5B%5D=OLYMPEX&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'PN',
                type: 'filter',
                applied: false,
                count: 34,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&project_h%5B%5D=PN&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'SAFARI 2000',
                type: 'filter',
                applied: false,
                count: 109,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&project_h%5B%5D=SAFARI+2000&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'SNF',
                type: 'filter',
                applied: false,
                count: 37,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&project_h%5B%5D=SNF&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'SPURS',
                type: 'filter',
                applied: false,
                count: 35,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&project_h%5B%5D=SPURS&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'SRB',
                type: 'filter',
                applied: false,
                count: 38,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&project_h%5B%5D=SRB&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'TOVS Pathfinder',
                type: 'filter',
                applied: false,
                count: 28,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&project_h%5B%5D=TOVS+Pathfinder&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: 'Vegetation',
                type: 'filter',
                applied: false,
                count: 66,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&project_h%5B%5D=Vegetation&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              }
            ]
          },
          {
            title: 'Processing levels',
            type: 'group',
            applied: false,
            has_children: true,
            children: [
              {
                title: '0 - Raw Data',
                type: 'filter',
                applied: false,
                count: 86,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&processing_level_id_h%5B%5D=0+-+Raw+Data&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: '1 - Radiance',
                type: 'filter',
                applied: false,
                count: 283,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&processing_level_id_h%5B%5D=1+-+Radiance&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: '1A - Radiance',
                type: 'filter',
                applied: false,
                count: 181,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&processing_level_id_h%5B%5D=1A+-+Radiance&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: '1B - Radiance, Sensor Coordinates',
                type: 'filter',
                applied: false,
                count: 670,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&processing_level_id_h%5B%5D=1B+-+Radiance%2C+Sensor+Coordinates&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: '2 - Geophys. Variables, Sensor Coordinates',
                type: 'filter',
                applied: false,
                count: 1839,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&processing_level_id_h%5B%5D=2+-+Geophys.+Variables%2C+Sensor+Coordinates&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: '3 - Gridded Observations',
                type: 'filter',
                applied: false,
                count: 3430,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&processing_level_id_h%5B%5D=3+-+Gridded+Observations&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              },
              {
                title: '4 - Gridded Model Output',
                type: 'filter',
                applied: false,
                count: 789,
                links: {
                  apply: 'https://cmr.earthdata.nasa.gov:443/search/collections.json?page_num=1&include_granule_counts=true&options%5Bscience_keywords_h%5D%5Bor%5D=true&options%5Btemporal%5D%5Blimit_to_granules%5D=true&has_granules_or_cwic=true&sort_key%5B%5D=has_granules_or_cwic&processing_level_id_h%5B%5D=4+-+Gridded+Model+Output&include_tags=edsc.extra.*%2Corg.ceos.wgiss.cwic.granules.prod&page_size=20&include_has_granules=true&include_facets=v2'
                },
                has_children: false
              }
            ]
          }
        ]
      }
    }
  }
}
