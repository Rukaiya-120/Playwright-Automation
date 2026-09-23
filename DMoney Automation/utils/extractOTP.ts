export function extractOTP(emailBody: string): string {
	const otp = emailBody.match(/\b(\d{4})\b/)?.[1];

	if (!otp) {
		throw new Error('No 4-digit OTP was found in the email.');
	}

	return otp;
}
