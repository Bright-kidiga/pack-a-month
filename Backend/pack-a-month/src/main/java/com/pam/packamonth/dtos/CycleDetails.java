package com.pam.packamonth.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDate;

@Data
@AllArgsConstructor
public class CycleDetails {
    private LocalDate startDate;
    private LocalDate cycleEndDate;
    private LocalDate ovulationStartDate;
    private LocalDate ovulationEndDate;
}