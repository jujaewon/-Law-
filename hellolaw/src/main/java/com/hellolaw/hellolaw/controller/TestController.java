package com.hellolaw.hellolaw.controller;

import com.hellolaw.hellolaw.entity.User;
import com.hellolaw.hellolaw.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@Slf4j
public class TestController {

  private final UserRepository userRepository;
  @GetMapping("/test")
  public String test() {
//    log.info("test");
    User test = userRepository.findByNickname("test").orElseThrow();
    log.info(test.getNickname());
    return "test";
  }

}