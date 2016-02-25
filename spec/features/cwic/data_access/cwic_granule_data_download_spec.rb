require "spec_helper"

describe "CWIC data download page", reset: false do
  extend Helpers::CollectionHelpers

  context "on CWIC granules list" do


    context "selecting the direct download option for multiple CWIC granules" do
      before :all do
        Capybara.reset_sessions!
        load_page :search, env: :sit, facets: true, ff: "Int'l / Interagency", q: 'C1200008589-GCMDTEST'
        wait_for_xhr
        login
        wait_for_xhr
        view_granule_results('OSTM/Jason-2 Level-2 Geophysical Data Records')

        granule_list.find('.master-overlay-global-actions').click_link('Filter granules')
        fill_in "Start", with: "2010-02-02 00:00:00\t"
        fill_in "End", with: "2010-02-02 23:59:59\t"
        js_click_apply ".master-overlay-content"
        click_button "granule-filters-submit"
        wait_for_xhr

        click_link "Retrieve Collection Data"
        wait_for_xhr
      end

      after :all do
        load_page :search, env: :sit, facets: true, ff: "Int'l / Interagency", q: 'C1200008589-GCMDTEST'
        wait_for_xhr
        view_granule_results('OSTM/Jason-2 Level-2 Geophysical Data Records')
      end

      it "displays the 'Download' option", acceptance: true do
        expect(page).to have_content("Select Data Access Method: Download")
      end

      context "and clicking submit" do
        before :all do
          click_on 'Submit'
          wait_for_xhr
        end

        it "provides a button to view download links", acceptance: true do
          expect(page).to have_link('View Download Links')
          expect(page).to have_link('Download Access Script')
        end

        context "then clicking the 'View Download Links' button" do
          before :all do
            click_link "View Download Links"
            wait_for_xhr
          end

          it "presents a list of download links", acceptance: true do
            within_last_window do
              expect(page).to have_link("http://data.nodc.noaa.gov/thredds/catalog/jason2/gdr/gdr/cycle058/catalog.html?dataset=jason2/gdr/gdr/cycle058/JA2_GPN_2PdP058_098_20100201_004856_20100201_014509.nc")
            end
          end
        end

        context "then clicking the 'Download Access Script' button" do
          before :all do
            click_link "Download Access Script"
            wait_for_xhr
          end

          it "presents a shell script which performs the user's query", acceptance: true do
            within_last_window do
              expect(page).to have_content('#!/bin/sh')
              expect(page).to have_content('http://data.nodc.noaa.gov/thredds/catalog/jason2/gdr/gdr/cycle058/catalog.html?dataset=jason2/gdr/gdr/cycle058/JA2_GPN_2PdP058_098_20100201_004856_20100201_014509.nc')
            end
          end
        end
      end
    end

    context "selecting the direct download option for a single CWIC granule" do
      before :all do
        Capybara.reset_sessions!
        load_page :search, env: :sit, facets: true, ff: "Int'l / Interagency", q: 'C1000003579-GCMDTEST'
        wait_for_xhr
        login
        wait_for_xhr
        view_granule_results('INSAT-3D Imager Level-2P IR WINDS')

        first_granule_list_item.click_link 'Retrieve single granule data'
        wait_for_xhr
      end

      after :all do
        Capybara.reset_sessions!
      end

      it "displays the 'Download' option", acceptance: true do
        expect(page).to have_content("Select Data Access Method: Download")
      end

      context "and clicking submit" do
        before :all do
          click_on 'Submit'
          wait_for_xhr
        end

        it "provides a button to view download links", acceptance: true do
          expect(page).to have_link('View Download Links')
          expect(page).to have_link('Download Access Script')
          expect(page).to have_link('View Browse Image Links')
        end

        context "then clicking the 'View Browse Image Links' button" do
          before :all do
            click_link "View Browse Image Links"
            wait_for_xhr
          end

          it "presents a list of browse image links", acceptance: true do
            within_last_window do
              expect(page).to have_link("http://www.mosdac.gov.in/servlet/Image?image=preview&loc=/mosdac_preview/3D_IMG/preview_thumb/2014/18JUL/3DIMG_18JUL2014_0400_L2P_IRW.gif")
            end
          end
        end

        context "then clicking the 'View Download Links' button" do
          before :all do
            click_link "View Download Links"
            wait_for_xhr
          end

          it "presents a list of download links", acceptance: true do
            within_last_window do
              expect(page).to have_link("http://www.mosdac.gov.in/servlet/Image?image=preview&loc=/mosdac_preview/3D_IMG/preview/2014/18JUL/3DIMG_18JUL2014_0400_L2P_IRW.gif")
            end
          end
        end

        context "then clicking the 'Download Access Script' button" do
          before :all do
            click_link "Download Access Script"
            wait_for_xhr
          end

          it "presents a shell script which performs the user's query", acceptance: true do
            within_last_window do
              expect(page).to have_content('#!/bin/sh')
              expect(page).to have_content('http://www.mosdac.gov.in/servlet/Image?image=preview&loc=/mosdac_preview/3D_IMG/preview/2014/18JUL/3DIMG_18JUL2014_0400_L2P_IRW.gif')
            end
          end
        end
      end
    end
  end
end