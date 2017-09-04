class AddCabToDrivers < ActiveRecord::Migration[5.1]
  def change
    add_reference :drivers, :cab, foreign_key: true
  end
end
