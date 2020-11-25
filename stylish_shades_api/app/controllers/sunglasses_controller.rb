class SunglassesController < ApplicationController
  before_action :set_sunglass, only: [:show, :update]

  def index
    @sunglasses = Sunglass.all 
    render json: @sunglasses, except: [:created_at, :updated_at]
  end

  def show
    render json: @sunglass
  end

  def update
    if @sunglass.update(sunglass_params)
      render json: @sunglass
    else 
      render json: @sunglass.errors
    end
  end

  private

  def sunglass_params
    params.require(:sunglass).permit(:model, :price, :category_id, :image, :stock_quantity)
  end

  def set_sunglass
    @sunglass = Sunglass.find_by_id(params[:id])
  end

end
