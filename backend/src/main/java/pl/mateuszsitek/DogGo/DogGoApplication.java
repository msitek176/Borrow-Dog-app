package pl.mateuszsitek.DogGo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.CrossOrigin;
import pl.mateuszsitek.DogGo.model.Role;
import pl.mateuszsitek.DogGo.model.UserDetails;
import pl.mateuszsitek.DogGo.model.Users;
import pl.mateuszsitek.DogGo.repository.RoleRepo;
import pl.mateuszsitek.DogGo.repository.UserDetailsRepo;
import pl.mateuszsitek.DogGo.repository.UsersRepo;

import java.util.Arrays;
import java.util.List;


@EnableJpaRepositories(basePackages="pl.mateuszsitek.DogGo.repository")
@SpringBootApplication()
@CrossOrigin(origins = { "http://localhost:3000" })
public class DogGoApplication  {


	public static void main(String[] args) {
		ConfigurableApplicationContext configurableApplicationContext =
			SpringApplication.run(DogGoApplication.class, args);
/*
		UsersRepo usersRepo =  configurableApplicationContext.getBean(UsersRepo.class);
		UserDetailsRepo userDetailsRepo = configurableApplicationContext.getBean(UserDetailsRepo.class);
		RoleRepo roleRepo = configurableApplicationContext.getBean(RoleRepo.class);

		Role role_user = new Role ("User");
		Users user = new Users(role_user,"ala", "makota","pass","number","email","salt");
		List<Users> users = Arrays.asList(user);
		role_user.setUsers(users);
		roleRepo.save(role_user);
		usersRepo.save(user);

		UserDetails userDetails = new UserDetails("photo", "makota","kielce");
		userDetails.setUser(user);
		userDetailsRepo.save(userDetails);

*/
	}
}

