require 'spec_helper'

describe 'When displaying an OPeNDAP collection in the results', reset: false do
  before :all do
    Capybara.reset_sessions!
    load_page :search, q: ['C1200187767-EDF_OPS'], env: :sit
    login
    wait_for_xhr
  end

  it 'subsetting badge is visible' do
    expect(page).to have_css('.badge-subsetting')
  end

  it 'subsetting badge shows configuration icons' do
    within '.badge-subsetting' do
      expect(page).to have_css('span', count: 2)
      within '.badge-content-secondary' do
        expect(page).to have_css('i', count: 4)
        expect(page).to have_css('i.fa.fa-globe')
        expect(page).to have_css('i.fa.fa-tags')
        expect(page).to have_css('i.fa.fa-sliders')
        expect(page).to have_css('i.fa.fa-file-text-o')
      end
    end
  end
end
