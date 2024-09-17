package com.pam.packamonth.Services;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class OtpService {

    private final Map<String, String> otpCache = new ConcurrentHashMap<>();

    @Autowired
    private JavaMailSender mailSender;

    @Value("${twilio.accountSid}")
    private String accountSid;

    @Value("${twilio.authToken}")
    private String authToken;

    @Value("${twilio.phoneNumber}")
    private String twilioPhoneNumber;

    @PostConstruct
    public void initTwilio() {
        // Initialize Twilio with account SID and Auth Token
        Twilio.init(accountSid, authToken);
    }

    public String generateOtp(String email, String phoneNumber) {
        String otp = String.valueOf((int) (Math.random() * 9000) + 1000); // 4-digit OTP
        otpCache.put(email, otp);
        sendOtpEmail(email, otp);  // Send OTP email
        sendOtpSms(phoneNumber, otp);  // Send OTP via SMS
        return otp;
    }

    public boolean validateOtp(String email, String otp) {
        String cachedOtp = otpCache.get(email);
        if (cachedOtp != null && cachedOtp.equals(otp)) {
            otpCache.remove(email);
            return true;
        }
        return false;
    }

    private void sendOtpEmail(String email, String otp) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(email);
        message.setSubject("Your OTP Code");
        message.setText("Your OTP code is: " + otp);
        mailSender.send(message);
    }

    private void sendOtpSms(String phoneNumber, String otp) {
        Message.creator(
                new PhoneNumber(phoneNumber),  // To
                new PhoneNumber(twilioPhoneNumber),  // From (Twilio verified number)
                "Your OTP code is: " + otp  // Message body
        ).create();
    }
}
