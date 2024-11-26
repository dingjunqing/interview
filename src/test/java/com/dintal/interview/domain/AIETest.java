package com.dintal.interview.domain;

import static com.dintal.interview.domain.AIETestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.dintal.interview.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class AIETest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(AIE.class);
        AIE aIE1 = getAIESample1();
        AIE aIE2 = new AIE();
        assertThat(aIE1).isNotEqualTo(aIE2);

        aIE2.setId(aIE1.getId());
        assertThat(aIE1).isEqualTo(aIE2);

        aIE2 = getAIESample2();
        assertThat(aIE1).isNotEqualTo(aIE2);
    }
}
