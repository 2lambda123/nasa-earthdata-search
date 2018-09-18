# EDSC-188 As a user, I want to view GIBS tile imagery corresponding to my
#          search area on a map so that I may preview my results
# EDSC-193 As a user, I want to see information about which collections have GIBS
#          support so I may understand why some collections render differently

require "spec_helper"

describe "Collection GIBS visualizations", reset: false, pending_updates: true do
  extend Helpers::CollectionHelpers

  gibs_collection_id = 'C119124186-NSIDC_ECS'
  gibs_collection_name = 'AMSR-E/Aqua L2B Global Swath Rain Rate/Type GSFC Profiling Algorithm V002'
  gibs_tile_layer = '.leaflet-tile-pane .leaflet-layer:nth-child(2)'

  context "when viewing a GIBS-enabled collection in the results list" do
    before :all do
      login
      wait_for_xhr
      load_page :search
      fill_in "keywords", with: gibs_collection_id
      wait_for_xhr
      expect(page).to have_content('AE_Rain')
    end
    it "indicates that the collection has GIBS visualizations" do
      expect(first_collection_result).to have_css('.badge-gibs')
    end
    after :all do
      reset_search
      wait_for_xhr
    end
  end

  context "when visualizing a GIBS-enabled collection" do
    before :all do
      login
      wait_for_xhr
      load_page :search
      fill_in "keywords", with: gibs_collection_id
      wait_for_xhr
      expect(page).to have_content('AE_Rain')
    end
    hook_granule_results(gibs_collection_name)
    it "displays composite GIBS imagery corresponding to the first 20 granule results on an HTML canvas" do
      expect(page).to have_granule_visualizations(gibs_collection_id)
    end
    after :all do
      reset_search
      wait_for_xhr
    end
  end

  context "when turning off visualizations for a GIBS-enabled collection" do
    before :all do
      load_page :search
      fill_in "keywords", with: gibs_collection_id
      expect(page).to have_content('AE_Rain')
    end
    hook_granule_results_back(gibs_collection_name)
    it "removes the collection's GIBS tiles from the map" do
      expect(page).to have_no_granule_visualizations(gibs_collection_id)
    end
    after :all do
      reset_search
      wait_for_xhr
    end
  end

  context 'when viewing a GIBS-enabled collection with different resolutions for each projection' do
    before :all do
      load_page :search, env: :sit
      fill_in 'keywords', with: 'C1000001002-EDF_OPS'
      wait_for_xhr
      first_collection_result.click
      wait_for_xhr
    end

    after :all do
      load_page :search
      fill_in "keywords", with: gibs_collection_id
      wait_for_xhr
    end

    it 'displays the correct geo resolution' do
      # expect(page).to have_gibs_resolution('1km')
      expect(page).to have_gibs_resolution('2km')
    end

    context 'when selecting the arctic resolution' do
      before :all do
        find('.projection-switcher-arctic').click
      end

      it 'displays the correct arctic resolution' do
        expect(page).to have_gibs_resolution('1km')
      end
    end
  end
  context 'when accessing GIBS-enabled collection "C179014699-NSIDC_ECS"' do
    before :all do
      load_page :search, q: 'C179014699-NSIDC_ECS'
      login
      wait_for_xhr
      fill_in 'keywords', with: 'C179014699-NSIDC_ECS'
      view_granule_results('AMSR-E/Aqua Daily L3 6.25 km 89 GHz Brightness Temperature (Tb) Polar Grids V002')
      wait_for_xhr
    end

    it "displays GIBS imagery correctly" do
      expect(page).to have_granule_visualizations('C179014699-NSIDC_ECS')
    end
  end

  context 'when accessing GIBS-enabled collection "C1000000020-LANCEAMSR2"' do
    before :all do
      load_page :search, q: 'C1000000020-LANCEAMSR2'
      view_granule_results('NRT AMSR2 DAILY L3 GLOBAL SNOW WATER EQUIVALENT EASE-GRIDS V0')
      wait_for_xhr
    end

    it "displays GIBS imagery correctly" do
      expect(page).to have_granule_visualizations('C1000000020-LANCEAMSR2')
    end
  end

  context 'when accessing GIBS-enabled collection "C181655997-NSIDC_ECS"', pending_updates: true do
    before :all do
      load_page :search, q: 'C181655997-NSIDC_ECS'
      view_granule_results('AMSR-E/Aqua Daily L3 25 km Tb and Sea Ice Concentration Polar Grids V002')
      wait_for_xhr
    end
    it "displays GIBS imagery correctly" do
      expect(page).to have_granule_visualizations('C181655997-NSIDC_ECS')
    end
  end

  context 'when accessing GIBS-enabled collection "C1236303849-NSIDC_ECS"' do
    before :all do
      load_page :search, q: 'C1236303849-NSIDC_ECS'
      view_granule_results('SMAP L3 Radar Northern Hemisphere Daily 3 km EASE-Grid Freeze/Thaw State V003')
      wait_for_xhr
    end
    it "displays GIBS imagery correctly" do
      expect(page).to have_granule_visualizations('C1236303849-NSIDC_ECS')
    end
  end
end
