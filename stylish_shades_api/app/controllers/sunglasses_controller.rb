class SunglassesController < ApplicationController

  def index
    @sunglasses = Sunglass.all 
    render json: @sunglasses 
  end


end
