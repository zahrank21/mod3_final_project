class FoodsController < ApplicationController

  def index
    @foods = Food.all
    render json: @foods
  end

  def show
    @food = Food.find(params[:id])
    render json: @food
  end

  def create
    @food = Food.create(food_params)
    render json: @food
  end

  def destroy
    @food = Food.find(params[:id])
    @food.destroy
    render json: @food
  end

  private

  def food_params
    params.require(:food).permit(:type_of_food, :in_fridge, :count, :community_fridge_id)
  end

end
