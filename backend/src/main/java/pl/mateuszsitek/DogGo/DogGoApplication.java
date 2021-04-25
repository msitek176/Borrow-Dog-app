package pl.mateuszsitek.DogGo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.CrossOrigin;

@EnableJpaRepositories(basePackages="pl.mateuszsitek.DogGo.repository")
@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
@CrossOrigin(origins = { "http://localhost:3000" })
public class DogGoApplication  {

	public static void main(String[] args) {
		ConfigurableApplicationContext configurableApplicationContext =
			SpringApplication.run(DogGoApplication.class, args);

	}
}

