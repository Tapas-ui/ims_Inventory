package com.ims.serviceImp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ims.dao.IMS_UserDao;
import com.ims.service.IMS_UserService;
@Service
public class IMS_UserServiceImp implements IMS_UserService{
@Autowired(required=true)
private IMS_UserDao ims_UserDao;

//@Qualifier("ims_UserDao")
public void setIms_UserDao(IMS_UserDao ims_UserDao) {
	this.ims_UserDao = ims_UserDao;
}
  
  
}
