class CreateMonsters < ActiveRecord::Migration[6.1]
  def change
    create_table :monsters do |t|
      t.string :name
      t.integer :life
      t.float :cr
      t.string :mon_type

      t.timestamps
    end
  end
end
