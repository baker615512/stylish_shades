class AddDetailsToSunglasses < ActiveRecord::Migration[6.0]
  def change
    add_column :sunglasses, :image, :string
    add_column :sunglasses, :stock_quantity, :integer
  end
end
