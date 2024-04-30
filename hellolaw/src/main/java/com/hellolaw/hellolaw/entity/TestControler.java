package com.hellolaw.hellolaw.entity;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.hellolaw.hellolaw.entity.UserRepository;


@RestController
@RequiredArgsConstructor
@Slf4j
public class TestControler {

  private final UserRepository userRepository;
  @GetMapping("/test")
  public String test() {
    log.info("test");

    User user = User.builder()
      .nickname("test")
      .build();

    userRepository.save(user);
    User test = userRepository.findByNickname("test").orElseThrow();
    log.info(test.getNickname());


    return "test";
  }

}
