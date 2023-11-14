import '@fortawesome/fontawesome-free/css/all.css';

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { Link, useNavigate } from "react-router-dom";

import { useToast } from "@/components/ui/use-toast"

import {
  Form,
  FormControl,
  
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
"use client"
import { useForm } from "react-hook-form";

import { SignupValidation } from "../../lib/validation/Index";
import Loader from "@/components/shared/Loader"

import { useCreateUserAccount, useSignInAccount } from "@/lib/react-query/queries";
// import { signInAccount } from "@/lib/appwrite/api";
import { useUserContext } from "@/context/AuthContext";

// const formSchema = z.object({
//   username: z.string().min(2).max(50),
// })
const SignupForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { checkAuthUser } = useUserContext();


  
  
  // 1. Define your form.
  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  })
  const { mutateAsync: createUserAccount, isPending: isCreatingAccount } = useCreateUserAccount();
  const { mutateAsync: signInAccount } = useSignInAccount();
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof SignupValidation>) {
    try {    
    const newUser = await createUserAccount(values)
    // ✅ This will be type-safe and validated.
    if(!newUser) {
      return toast({
        title: "Sign up failed. Please try again.",
        
      })
    }
    const session = await signInAccount({
      email: values.email,
      password: values.password,
    });

    if (!session) {
      toast({ title: "Something went wrong. Please login your new account", });
      
      navigate("/sign-in");
      
      return;
    }
    const isLoggedIn = await checkAuthUser();
    if (isLoggedIn) {
      form.reset();

      navigate("/");
    } else {
      toast({ title: "Login failed. Please try again.", });
      
      return;
    }
  } catch (error) {
    console.log({ error });
  }


  }






 


  return (
    
      <Form {...form}>
        <div className="sm:w-420 flex-center flex-col">
        <img src="/assets/images/logo.svg" alt="logo" />
        <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">
          Create a new account
        </h2>
        <p className="text-light-3 small-medium md:base-regular mt-2">
          To use Tok_Sol Creators, Please enter your details
        </p>

        
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
              <Input type="text" className="shad-input" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">Username</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">Email</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">Password</FormLabel>
                <FormControl>
                  <Input type="password" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

        
<Button type="submit" className="shad-button_primary">
            { isCreatingAccount  ? (
              <div className="flex-center gap-2">
                <Loader /> Loading...
              </div>
            ) : (
              "Sign Up"
            )}
          </Button>
          <p className="text-small-regular text-light-2 text-center mt-2">
            Already have an account?
            <Link
              to="/sign-in"
              className="text-primary-500 text-small-semibold ml-1">
              Log in
            </Link>
          </p>
      </form>
      </div>
      <div>
      <a href="https://github.com/pablofelipe01" target="_blank" rel="noopener noreferrer" className="text-small-regular text-light-2">
        <i className="fab fa-github"></i> GitHub
      </a>
      <a href="https://twitter.com/tokensolutions" target="_blank" rel="noopener noreferrer" className="text-small-regular text-light-2 ml-3">
        <i className="fa-brands fa-x-twitter"></i> Twitter
      </a>
      </div>
      <div>
        {/* Email link with icon */}
        <a href="mailto:toksol@toksol.io" className="text-small-regular text-light-2">
        <i className="far fa-envelope"></i> Contact
      </a>
      </div>
      <div>
      {/* Developer's website link with icon */}
      <a href="https://www.toksol.io/" target="_blank" rel="noopener noreferrer" className="text-small-regular text-light-2">
        <i className="fas fa-globe"></i> Visit the developer's website
      </a>
      </div>
      <div style={{ width: '50px', height: 'auto' }}>
    {/* Solana logo with slogan */}
    <img src="https://i.imgur.com/HxeidNg.png" alt="Solana Logo" className="mt-2" />
    </div>
    <div>
      <p className="text-purple-500">Only possible in Solana</p>
      </div>
    </Form>
    
    
  )
}

export default SignupForm