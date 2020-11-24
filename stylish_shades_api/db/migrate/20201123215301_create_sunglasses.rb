class CreateSunglasses < ActiveRecord::Migration[6.0]
  def change
    create_table :sunglasses do |t|
      t.string :model
      t.integer :price
      t.string :material
      t.belongs_to :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
