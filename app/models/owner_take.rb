class OwnerTake < ApplicationRecord
  belongs_to :expense
  belongs_to :owner

  accepts_nested_attributes_for :expense, :allow_destroy => true

  validates :date, presence: true

  #
  #
  #
  def self.owner_takes_sum
    self.includes(:expense).pluck(:amount).sum
  end

  #
  #
  #
  def self.owner_takes_by_year(year)

    ApplicationController
        .helpers
        .similar_expenses_amounts_by_date(self.includes(:expense).where('extract(year from date) = ?', year)
                                              .pluck(:date.to_s, :amount))

  end

  #
  #
  #
  def self.owner_takes_by_year_and_month(year, month)
    ApplicationController
        .helpers
        .similar_expenses_amounts_by_year_and_month_v2(
            self.includes(:expense)
                .where('extract(year from date) = ? AND extract(month from date) = ?', year, month)
                .pluck(:date.to_s, :amount)
        )
  end

end
