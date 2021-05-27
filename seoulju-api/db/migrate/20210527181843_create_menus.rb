class CreateMenus < ActiveRecord::Migration[6.1]
  def change
    create_table :menus do |t|
      t.string :category
      t.string :name
      t.text :desc
      t.numeric :price
      t.string :status

      t.timestamps
    end
  end
end
