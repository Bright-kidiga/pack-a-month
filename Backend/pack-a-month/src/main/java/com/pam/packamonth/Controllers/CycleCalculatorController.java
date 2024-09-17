package com.pam.packamonth.Controllers;

import com.pam.packamonth.Services.CycleCalculatorService;
import com.pam.packamonth.dtos.CycleDetails;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cycle")
@Slf4j
public class CycleCalculatorController {

    @Autowired
    private CycleCalculatorService cycleCalculatorService;

    @GetMapping("/calculate")
    public CycleDetails calculateCycle(@RequestParam String startDate) {
        log.info("Test");
        return cycleCalculatorService.calculateCycle(startDate);
    }

}
