class MiscsController < ApplicationController
  def index
    @miscs = Misc.all
    render json: @miscs
  end

  def show
    @misc = Misc.find(params[:id])
    render json: @misc

  end

  def create
    @misc = Misc.create(misc_params)
    render json: @misc
  end

  def destroy
    @misc = Misc.find(params[:id])
    @misc.destroy
    render json: @misc

  end

  private

  def misc_params
    params.require(:misc).permit()
  end


end
