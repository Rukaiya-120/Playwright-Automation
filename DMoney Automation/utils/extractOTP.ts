export function extractOTP(emailBody: string): string {
	const otp = emailBody.match(/^\s*(\d{4})\s*$/m)?.[1];

	if (!otp) {
		throw new Error('No 4-digit OTP was found in the email.');
	}

	return otp;
}
