import projectsData from "../data/projectsData";

function calculateSkills() {

  const skillScores = {};

  const skillFeatures = {};

  projectsData.forEach((project) => {

    const technologies =
      project.technologies;

    Object.keys(technologies)
      .forEach((tech) => {

        // Initialize
        if (!skillScores[tech]) {

          skillScores[tech] = {
            score: 0,
            advanced: 0,
            intermediate: 0,
            beginner: 0
          };

        }

        if (!skillFeatures[tech]) {

          skillFeatures[tech] = [];

        }

        technologies[tech]
          .forEach((item) => {

            // Add score
            skillScores[tech].score +=
              item.weight;

            // Count difficulty
            if (
              item.difficulty === "Advanced"
            ) {

              skillScores[tech]
                .advanced += 1;

            }

            else if (
              item.difficulty ===
              "Intermediate"
            ) {

              skillScores[tech]
                .intermediate += 1;

            }

            else {

              skillScores[tech]
                .beginner += 1;

            }

            // Store feature names
            skillFeatures[tech]
              .push(item.feature);

          });

      });

  });

  // Highest score
  const maxScore = Math.max(

    ...Object.values(skillScores)
      .map((item) => item.score)

  );

  // Final formatted skills
  const finalSkills =

    Object.keys(skillScores)
      .map((tech) => ({

        name: tech,

        percentage: Math.round(

  40 +

  (
    (
      skillScores[tech].score
      / maxScore
    ) * 60
  )

),

        score:
          skillScores[tech].score,

        advanced:
          skillScores[tech].advanced,

        intermediate:
          skillScores[tech]
            .intermediate,

        beginner:
          skillScores[tech]
            .beginner,

        features:

          [...new Set(
            skillFeatures[tech]
          )]

      }));

  return finalSkills;

}

export default calculateSkills;