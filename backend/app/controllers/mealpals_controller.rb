class MealpalsController < ApplicationController

  def index
    @mealpals = Mealpal.all
    render json: @mealpals
  end

  def show
    @mealpal = Mealpal.find(params[:id])
    render json: @mealpal
  end

  def create
    @mealpal = Mealpal.create(mealpal_params)
    render json: @mealpal
  end

  def destroy
    @mealpal = Food.find(params[:id])
    @mealpal.destroy
    render json: @mealpal
  end

  private

  def mealpal_params
    params.require(:mealpal).permit(:user_id, :referral_link, :count, :expiration_date)
  end

end
