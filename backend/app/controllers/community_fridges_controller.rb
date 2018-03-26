class CommunityFridgesController < ApplicationController

  def index
    @community_fridges = CommunityFridge.all
    render json: @community_fridges
  end

end
