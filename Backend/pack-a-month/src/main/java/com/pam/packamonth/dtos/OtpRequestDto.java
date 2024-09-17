package com.pam.packamonth.dtos;

import lombok.Data;

@Data
public class OtpRequestDto {
    private String email;
    private String phoneNumber;
}