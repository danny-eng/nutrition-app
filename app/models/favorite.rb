class Favorite < ApplicationRecord
  validates_uniqueness_of :user_id, scope: :ndbno
  belongs_to :user
end
