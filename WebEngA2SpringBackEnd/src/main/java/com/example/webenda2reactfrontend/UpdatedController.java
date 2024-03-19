package com.example.webenda2reactfrontend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*") // Allow all? (at least gets rid of CORS)
public class UpdatedController
{
    private APODService _apodService = null;

    public UpdatedController(APODService apodService)
    {
        this._apodService = apodService;
    }


    @GetMapping("/apod")
    public APODObject getApod()
    {
        return _apodService.getAPODObject();
    }

    @GetMapping("/apod/getByDate/{date}")
    public APODObject getApod(@PathVariable @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate date)
    {
        return _apodService.getAPODObject(date);
    }

    @GetMapping("/apod/getByDate")
    public APODObject[] getApod(@RequestParam(value = "start_date", required = false) String start_date,
                              @RequestParam(value = "end_date", required = false) String end_date)
    {
        return _apodService.getAPODObject(start_date,end_date);
    }

    @GetMapping("/apod/getByCount/{count}")
    public APODObject[] getApod(@PathVariable String count)
    {
        return _apodService.getAPODObject(Integer.parseInt(count));
    }


}
