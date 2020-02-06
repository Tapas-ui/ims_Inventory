package com.ims.controller;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.ims.service.IMS_UserService;

@Controller
public class imscontroler {
	@Autowired
	//@Qualifier("ims_UserService")
	private IMS_UserService  ims_UserService;
	

	public void setIms_UserService(IMS_UserService ims_UserService) {
		this.ims_UserService = ims_UserService;
	}

	public static void setLog(Logger log) {
		imscontroler.log = log;
	}

	public static Logger log = Logger.getLogger(imscontroler.class);

	// Displayed screen for Main Page
	@RequestMapping("/ims.htm")
	public ModelAndView homeApp() {
		ModelAndView mv = new ModelAndView();
		log.info("sucesss message the print ims home page");
		mv.setViewName("ims_home");
		return mv;

	}

	@RequestMapping("/public/membership.htm")
	public ModelAndView memberShip() {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("membership_registation");
		return mv;
	}

}
