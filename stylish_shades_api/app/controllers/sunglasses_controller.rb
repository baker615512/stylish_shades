class SunglassesController < ApplicationController
  before_action :load_sunglass, only: [:show, :update]

  def index
    @sunglasses = Sunglass.where(category_id: params[:category_id].to_i)
    render json: @sunglasses, except: [:created_at, :updated_at]
  end

  def update
    if @sunglass.update(stock_quantity: @sunglass.stock_quantity - 1)
      render json: @sunglass
    else 
      render json: @sunglass.errors
    end
  end

  private

  def sunglass_params
    params.require(:sunglass).permit(:model, :price, :category_id, :image, :stock_quantity)
  end

  def load_sunglass
    @sunglass = Sunglass.find(params[:id])
  end

end
