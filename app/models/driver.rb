class Driver < ApplicationRecord
  has_many :damages

  validates :full_name, presence: true
  validates :birth_date, presence: true
end
