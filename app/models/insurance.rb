class Insurance < ApplicationRecord
  belongs_to :expense, optional: true
  belongs_to :insurer

  accepts_nested_attributes_for :expense, :allow_destroy => true

  validates :start_date, presence: true
  validates :expiration_date, presence: true

end
