import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Loader, UploadCloudIcon } from "lucide-react";

export const UserForm = ({ form, onSubmit, isLoading }) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  className="bg-[#D4EDED] focus-visible:ring-offset-0 border-0 focus-visible:ring-0"
                  placeholder="Name"
                  {...field}
                />
              </FormControl>
              <FormDescription>{`You can't change your name.`}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  readOnly
                  className="bg-[#D4EDED] read-only:cursor-not-allowed focus-visible:ring-offset-0 border-0 focus-visible:ring-0"
                  placeholder="Email"
                  {...field}
                />
              </FormControl>
              <FormDescription>{`
                    You can't change your email address.
                    `}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input
                  className="bg-[#D4EDED] focus-visible:ring-offset-0 border-0 focus-visible:ring-0"
                  placeholder="Phone"
                  {...field}
                />
              </FormControl>
              <FormDescription>Please enter your phone number.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="dateOfBirth"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date of Birth</FormLabel>
              <FormControl>
                <Input
                  type="date"
                  className="bg-[#D4EDED] focus-visible:ring-offset-0 border-0 focus-visible:ring-0"
                  placeholder="Date of Birth"
                  {...field}
                />
              </FormControl>
              <FormDescription>Please enter your date of birth.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gender</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value={"male"} />
                    </FormControl>
                    <FormLabel className="font-normal">Male</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value={"female"} />
                    </FormControl>
                    <FormLabel className="font-normal">Female</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormDescription>Please select your gender.</FormDescription>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <div>
                  <p className="mb-3">Profile Image</p>
                  <div className="w-full bg-[#2A99A2]/20 text-gray-600 font-bold cursor-pointer rounded-lg h-24 flex justify-center items-center">
                    <UploadCloudIcon className="w-12 h-12" />
                  </div>
                </div>
                <FormControl>
                  <Input
                    type="file"
                    className="bg-[#D4EDED] hidden file:bg-red-500 file:text-red-500 focus-visible:ring-offset-0 border-0 focus-visible:ring-0"
                    placeholder="Profile Image"
                    onChange={(e) => field.onChange(e.target.files)}
                  />
                </FormControl>
              </FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isLoading} type="submit" className="w-full text-xl">
          {!isLoading ? "Update Profile" : <Loader className="w-4 h-4 animate-spin" />}
        </Button>
      </form>
    </Form>
  );
};
