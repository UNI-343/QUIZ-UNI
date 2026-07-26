const allQuestions = Array.from({ length: 4 }, (_, i) => window[`allQuestions${i + 1}`] || [])
                        .flat();
