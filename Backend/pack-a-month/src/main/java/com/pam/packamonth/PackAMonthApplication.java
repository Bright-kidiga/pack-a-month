package com.pam.packamonth;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.pam.packamonth.Repositories")
public class PackAMonthApplication {

    public static void main(String[] args) {
        SpringApplication.run(PackAMonthApplication.class, args);
    }

}
