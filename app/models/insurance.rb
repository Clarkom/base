class Insurance < ApplicationRecord
  belongs_to :expense
  belongs_to :insurer

  validates :start_date, presence: true
  validates :expiration_date, presence: true

end
