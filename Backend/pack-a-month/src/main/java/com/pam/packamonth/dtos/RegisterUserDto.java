package com.pam.packamonth.dtos;

import lombok.Data;

@Data
public class RegisterUserDto {
        private String email;
        private String password;
        private String fullName;
        private String phoneNumber;

}
