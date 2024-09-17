package com.pam.packamonth.Controllers;

import com.pam.packamonth.Entities.User;
import com.pam.packamonth.Services.AuthenticationService;
import com.pam.packamonth.Services.JwtService;
import com.pam.packamonth.dtos.LoginResponse;
import com.pam.packamonth.dtos.LoginUserDto;
import com.pam.packamonth.dtos.OtpRequestDto;
import com.pam.packamonth.dtos.RegisterUserDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/auth")
@RestController
public class AuthenticationController {
    private final JwtService jwtService;
    private final AuthenticationService authenticationService;

    public AuthenticationController(JwtService jwtService, AuthenticationService authenticationService) {
        this.jwtService = jwtService;
        this.authenticationService = authenticationService;
    }

    @PostMapping("/signup")
    public ResponseEntity<User> register(@RequestBody RegisterUserDto registerUserDto) {
        User registeredUser = authenticationService.signup(registerUserDto);
        return ResponseEntity.ok(registeredUser);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> authenticate(@RequestBody LoginUserDto loginUserDto) {
        User authenticatedUser = authenticationService.authenticate(loginUserDto);
        String jwtToken = jwtService.generateToken(authenticatedUser);

        LoginResponse loginResponse = new LoginResponse();
        loginResponse.setToken(jwtToken);
        loginResponse.setExpiresIn(jwtService.getExpirationTime());

        return ResponseEntity.ok(loginResponse);
    }

    // New endpoint to request OTP for password change
    @PostMapping("/request-otp")
    public ResponseEntity<String> requestOtp(@RequestBody OtpRequestDto otpRequestDto) {
        String otp = authenticationService.requestOtp(otpRequestDto.getEmail(), otpRequestDto.getPhoneNumber());
        return ResponseEntity.ok("OTP has been sent."); // Don't return the actual OTP in production
    }

    // New endpoint to change password with OTP
    @PostMapping("/change-password")
    public ResponseEntity<String> changePassword(
            @RequestParam String email,
            @RequestParam String otp,
            @RequestParam String newPassword
    ) {
        authenticationService.changePassword(email, otp, newPassword);
        return ResponseEntity.ok("Password changed successfully.");
    }
}
