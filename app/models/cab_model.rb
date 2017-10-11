class CabModel < ApplicationRecord
  belongs_to :fuel_type

  validates :name, presence: true
  validates :number_places, presence: true
  validates :power_hp, presence: true
  validates :manufacture_year, presence: true

end
