package com.hellolaw.hellolaw.repository;

import com.hellolaw.hellolaw.entity.User;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
  Optional<User> findByNickname(String nickname);
}
