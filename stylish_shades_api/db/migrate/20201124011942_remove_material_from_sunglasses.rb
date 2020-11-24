class RemoveMaterialFromSunglasses < ActiveRecord::Migration[6.0]
  def change
    remove_column :sunglasses, :material, :string
  end
end
