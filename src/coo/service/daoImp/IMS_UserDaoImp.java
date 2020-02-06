package coo.service.daoImp;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.ims.dao.IMS_UserDao;
@Repository
public class IMS_UserDaoImp implements IMS_UserDao {
@Autowired(required=true)
private SessionFactory sessionFactory;

public void setSessionfactory(SessionFactory sessionFactory) {
	this.sessionFactory = sessionFactory;
} 

}
