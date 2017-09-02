class Inssurance < ApplicationRecord
  belongs_to :expense
  belongs_to :insurer

  validates :start_date, presence: true
  validates :end_date, presence: true

end
