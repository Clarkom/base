class AddUserToCabs < ActiveRecord::Migration[5.1]
  def change
    add_reference :cabs, :user, foreign_key: true
  end
end
