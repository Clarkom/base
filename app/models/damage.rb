class Damage < ApplicationRecord
  belongs_to :damage_type
  belongs_to :expense
  belongs_to :driver

  validates :date, presence: true

end
