class CreateWordSmiths < ActiveRecord::Migration[5.2]
  def change
    create_table :word_smiths do |t|
      t.string :word
      t.string :output

      t.timestamps
    end
  end
end
