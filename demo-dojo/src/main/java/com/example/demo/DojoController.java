package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class DojoController {
	
	@GetMapping({"/", "/helloDojo"})
	public String helloDojo(Model model) {
		return "helloDojo";
	}

}
