class User < ActiveRecord::Base

	attr_reader :password

	validates :name, :password_digest, :session_token, :email, presence: true
	validates :name, :session_token, :email, uniqueness: true
	validates :password, length: { minimum: 6, allow_nil: :true }

	after_initialize :ensure_session_token

	has_many :images
	has_many :albums

	def password=(password)
		self.password_digest = BCrypt::Password.create(password)
		@password = password
	end

	def self.find_by_credentials(email, password)
		user = User.find_by(email: email)
		return nil unless user
		user.is_password?(password) ? user : nil
	end

	def is_password?(password)
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end

	def reset_session_token!
		self.session_token = generate_session_token
		self.save
		self.session_token
	end

	private

	def ensure_session_token
		self.session_token ||= generate_session_token
	end

	def generate_session_token
		SecureRandom.base64
	end
end
