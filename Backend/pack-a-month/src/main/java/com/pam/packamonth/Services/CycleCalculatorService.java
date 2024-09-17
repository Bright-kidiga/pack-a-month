package com.pam.packamonth.Services;

import com.pam.packamonth.dtos.CycleDetails;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@Service
public class CycleCalculatorService {
    public CycleDetails calculateCycle(String startDate) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDate start = LocalDate.parse(startDate, formatter);

        // Calculate cycle dates
        LocalDate cycleEnd = start.plusDays(5);
        LocalDate ovulationStart = cycleEnd.plusDays(23); // 5 + 23 = 28 days
        LocalDate ovulationEnd = ovulationStart.plusDays(4);

        return new CycleDetails(start, cycleEnd, ovulationStart, ovulationEnd);
    }
}
