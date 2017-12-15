class CreateFavorites < ActiveRecord::Migration[5.1]
  def change
    create_table :favorites do |t|
      t.integer :ndbno
      t.string :name

      t.belongs_to :user
      t.timestamps
    end
  end
end
